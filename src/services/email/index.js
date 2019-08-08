const nodemailer = require('nodemailer')
const confirmEmail = require('./confirmEmail')
const forgotPasswordEmail = require('./forgotPasswordEmail')

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

module.exports = async (type, to, url) => {
  let payload

  switch (type) {
    case 'confirm':
      payload = confirmEmail(to, url)
      break
    case 'forgotPassword':
      payload = forgotPasswordEmail(to, url)
      break
    default:
      throw new Error('invalid email type')
  }

  const res = await transport.sendMail(payload)
}
