const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const { v4 } = require('uuid')
const bcrypt = require('bcryptjs')
const { prisma } = require('../generated')
const { redis } = require('../services/redis')
const sendEmail = require('../services/email')
const { userSessionIdPrefix } = require('../constants')

var user

// passport twitter strategy
const TwitterStrategy = new Strategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: '/api/twitter/callback',
    includeEmail: true
  },
  async (token, tokenSecret, profile, cb) => {
    user = undefined
    // workaround for twitter requiring url for terms of service and privacy policy
    profile.emails = [{ value: 'example@gmail.com' }] // remove this line

    // TODO
    // add a real check for email and decide what to do
    // handle case if twitter doesnt provide email

    // check if user with email exists
    const emailExists = await prisma.$exists.user({ email: profile.emails[0].value })

    // check if user id twitter id exists
    const idExists = await prisma.$exists.user({ twitterId: profile.id })

    // sign user in
    if (emailExists && idExists) {
      user = await prisma.user({ twitterId: profile.id })
    }

    // merge new twitter id into existing account
    else if (emailExists && !idExists) {
      user = await prisma.updateUser({
        where: { email: profile.emails[0].value.toLowerCase() },
        data: { twitterId: profile.id }
      })
    }

    // user may have changed their email on twitter
    else if (!emailExists && idExists) {
      user = prisma.user({ twitterId: profile.id })
    }

    // create a new user when no user for email or twitter id is in db
    else if (!emailExists && !idExists) {
      user = await prisma.createUser({
        twitterId: profile.id,
        name: profile.username,
        email: profile.emails ? profile.emails[0].value.toLowerCase() : '',
        image: profile.photos ? profile.photos[0].value : '',
        password: await bcrypt.hash(v4(), 10)
      })
    }

    // still require email verification for unconfirmed users
    if (!user.confirmed) {
      var id = v4()
      await redis.set(id, user.id, 'ex', 60 * 60 * 24)
      await sendEmail('confirm', user.email, `${process.env.BACKEND}/confirm/${id}`)
    }

    cb(null, {})
  }
)

// passed as middleware to callback route
// set redirect anywhere on frontend
// we handle sessions independent of passport
const twitterCallback = () =>
  passport.authenticate('twitter', { failureRedirect: '/register', session: false })

// passed as route handler to callback
const twitterRedirect = async (req, res) => {
  // attach userId to current session and add session id to redis cache
  if (user.confirmed && !user.forgotPasswordLock) {
    req.session.userId = user.id
    if (req.sessionID) {
      await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID)
    }
  }

  // redirect to playground
  res.redirect('/graphql')
}

module.exports = { TwitterStrategy, twitterRedirect, twitterCallback }
