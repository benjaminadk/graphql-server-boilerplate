require('dotenv').config()
const axios = require('axios')
const bcrypt = require('bcryptjs')
const uuid = require('uuid/v1')

async function sendDataToPrisma(data) {
  await axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PRISMA_TOKEN}`
    },
    url: `${process.env.PRISMA_ENDPOINT}/import`,
    data
  })
}

function createId() {
  return uuid()
    .replace(/-/g, '')
    .slice(0, 25)
}

console.log('seeding')
