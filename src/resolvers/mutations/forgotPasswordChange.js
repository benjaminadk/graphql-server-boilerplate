const bcrypt = require('bcryptjs')
const { forgotPasswordPrefix } = require('../../constants')
const validate = require('../../utils/validate')

module.exports = async (_, args, { prisma, redis }, info) => {
  // combine prefix with key parsed from url
  const redisKey = `${forgotPasswordPrefix}${args.key}`

  // fetch userId from redis
  const userId = await redis.get(redisKey)

  // throw error if key is not there thus expired
  if (!userId) throw new Error('Expired key')

  // validate user input
  validate('forgotPasswordChange', args)

  // hash password
  const hashedPassword = await bcrypt.hash(args.newPassword, 10)

  // update user in primsa database
  const updateUserPromise = prisma.updateUser({
    where: { id: userId },
    data: { password: hashedPassword, forgotPasswordLock: false }
  })

  // delete key from redis
  const deleteKeyPromise = redis.del(redisKey)

  // resolve both operations
  await Promise.all([updateUserPromise, deleteKeyPromise])

  // return success
  return {
    success: true,
    message: 'Password change success'
  }
}
