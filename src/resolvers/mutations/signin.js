const { UserInputError, AuthenticationError } = require('apollo-server-express')
const bcrypt = require('bcryptjs')
const validate = require('../../utils/validate')
const { userSessionIdPrefix } = require('../../constants')

module.exports = async (_, args, { req, session, prisma, redis }, info) => {
  // validate user input
  validate('signin', args)

  // fetch user from database
  const user = await prisma.user({ email: args.email.toLowerCase() })

  // throw error if user isn't found
  if (!user) throw new UserInputError(`No record of user with name: ${args.email}`)

  // throw error if user hasn't confirmed email
  if (!user.confirmed) throw new AuthenticationError(`Please confirm your email address`)

  // throw error if user account is locked due to forgot password request
  if (user.forgotPasswordLock) throw new AuthenticationError(`Account is locked`)

  // see if user input password matches database record
  const isMatch = await bcrypt.compare(args.password, user.password)

  // throw error if passwords don't match
  if (!isMatch) throw new UserInputError(`Invalid password`)

  // add userId to session
  session.userId = user.id
  if (req.sessionID) {
    await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID)
  }

  // success payload
  return {
    success: true,
    message: 'User signed in',
    user
  }
}
