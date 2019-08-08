const bcrypt = require('bcryptjs')
const md5 = require('md5')
const v4 = require('uuid/v4')
const validate = require('../../utils/validate')
const sendEmail = require('../../services/email')

module.exports = async (_, args, { prisma, redis }, info) => {
  // validate user input
  validate('signup', args)

  // cleanup email
  const email = args.email.trim().toLowerCase()

  // hash email
  const hashedEmail = md5(email)

  // use gravatar image if available with fallback
  const image = `https://www.gravatar.com/avatar/${hashedEmail}?d=mp`

  // hash password
  const hashedPassword = await bcrypt.hash(args.password, 10)

  // create user
  const user = await prisma.createUser({
    name: args.name,
    email,
    password: hashedPassword,
    image
  })

  // generate random id
  const id = v4()

  // set key:value id:userId expires in 24 hours
  await redis.set(id, user.id, 'ex', 60 * 60 * 24)

  // send user email with link to confirm their email address
  await sendEmail('confirm', user.email, `${process.env.BACKEND}/confirm/${id}`)

  // success payload
  return {
    success: true,
    message: `User created`,
    user
  }
}
