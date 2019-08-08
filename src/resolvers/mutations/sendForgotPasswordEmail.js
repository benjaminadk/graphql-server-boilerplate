const { UserInputError } = require('apollo-server-express')
const v4 = require('uuid/v4')
const sendEmail = require('../../services/email')
const removeAllUserSessions = require('../../utils/removeAllUserSessions')
const { forgotPasswordPrefix } = require('../../constants')

module.exports = async (_, args, { prisma, redis }, info) => {
  // fetch user from prisma database
  const user = await prisma.user({ email: args.email.toLowerCase() })

  // throw error if user isn't found
  if (!user) throw new UserInputError(`No record of user with name: ${args.email}`)

  // lock user account
  await prisma.updateUser({ where: { id: user.id }, data: { forgotPasswordLock: true } })

  // remove user sessions from redis
  await removeAllUserSessions(user.id, redis)

  // generate random id
  const id = v4()

  // set redis key with 20 minute expiration
  await redis.set(`${forgotPasswordPrefix}${id}`, user.id, 'ex', 60 * 20)

  // send user email with link
  // TODO
  // create this page on frontend
  await sendEmail('forgotPassword', user.email, `${process.env.BACKEND}/change-password/${id}`)

  // success
  return {
    success: true,
    message: 'Forgot password email sent success'
  }
}
