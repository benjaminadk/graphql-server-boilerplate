require('dotenv').config()
const express = require('express')
const passport = require('passport')
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const RateLimit = require('express-rate-limit')
const RateLimitRedisStore = require('rate-limit-redis')
const { redis } = require('./services/redis')
const { prisma } = require('./generated')
const resolvers = require('./resolvers')
const { TwitterStrategy, twitterRedirect, twitterCallback } = require('./services/twitter')
const confirmUser = require('./routes/confirmUser')
const { redisSessionPrefix } = require('./constants')

const server = new ApolloServer({
  resolvers,
  typeDefs: importSchema('./src/schema.graphql'),
  context: ({ req }) => ({
    req,
    prisma,
    redis,
    session: req.session
  })
})

const cors = {
  credentials: true,
  origin: process.env.FRONTEND
}

passport.use(TwitterStrategy)

const app = express()

app.use(
  session({
    store: new RedisStore({
      client: redis,
      prefix: redisSessionPrefix
    }),
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    rolling: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
)

app.use(
  new RateLimit({
    store: new RateLimitRedisStore({
      client: redis
    }),
    windowMs: 15 * 60 * 1000,
    max: 100,
    delayMs: 0
  })
)

app.use(passport.initialize())

app.get('/api/twitter', passport.authenticate('twitter'))

app.get('/api/twitter/callback', twitterCallback(), twitterRedirect)

app.get('/confirm/:id', confirmUser)

server.applyMiddleware({ app, cors, path: '/graphql' })

app.listen({ port: process.env.PORT }, () =>
  console.log(`Server up at http://localhost:${process.env.PORT}/graphql`)
)
