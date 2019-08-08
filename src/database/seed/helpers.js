const { subDays } = require('date-fns')
const { v1 } = require('uuid')

const createId = () => {
  return v1()
    .replace(/-/g, '')
    .slice(0, 25)
}

const createDateNow = () => new Date().toISOString()

const createDatePast = () => {
  const days = Math.floor(Math.random() * 365)
  return subDays(new Date(), days).toISOString()
}

module.exports = {
  createId,
  createDateNow,
  createDatePast
}
