const { redis } = require('../services/redis')
const { prisma } = require('../generated')

module.exports = async (req, res) => {
  const { id } = req.params
  const userId = await redis.get(id)
  if (userId) {
    await prisma.updateUser({ where: { id: userId }, data: { confirmed: true } })
    await redis.del(id)
    res.send('ok')
  } else {
    res.send('invalid')
  }
}
