const { AuthenticationError } = require('apollo-server-express')

const roles = ['ADMIN', 'USER']

const isAuthenticated = (module.exports = async (_, args, { prisma, session }, info) => {
  if (!session.sessionID) throw new AuthenticationError('UNAUTHORIZED ACTION')
  const user = await prisma.user({ id: session.sessionID })
  if (!user) throw new AuthenticationError('UNAUTHORIZED ACTION')
  if (!roles.includes(user.role)) throw new AuthenticationError('UNAUTHORIZED ACTION')
})

const isAdmin = (module.exports = async (_, args, { prisma, session }, info) => {
  if (!session.sessionID) throw new AuthenticationError('UNAUTHORIZED ACTION')
  const user = await prisma.user({ id: session.sessionID })
  if (user.role !== 'ADMIN') throw new AuthenticationError('UNAUTHORIZED ACTION')
})

module.exports = {
  isAuthenticated,
  isAdmin
}
