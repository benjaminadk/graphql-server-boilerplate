require('dotenv').config()
const bcrypt = require('bcryptjs')
const md5 = require('md5')
const sendDataToPrisma = require('./sendDataToPrisma')
const { createId, createDateNow, createDatePast } = require('./helpers')

module.exports = async () => {
  const admin = {
    _typeName: 'User',
    id: createId(),
    createdAt: createDateNow(),
    name: 'Administrator',
    email: process.env.ADMIN_EMAIL,
    password: await bcrypt.hash(process.env.ADMIN_PASS, 10),
    image: `https://www.gravatar.com/avatar/${md5(process.env.ADMIN_EMAIL)}?d=mp`,
    confirmed: true,
    forgotPasswordLock: false,
    role: 'ADMIN'
  }

  const nodes = [admin]

  const NODES = { valueType: 'nodes', values: nodes }

  await sendDataToPrisma(NODES)
}
