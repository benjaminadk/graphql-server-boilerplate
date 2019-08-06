module.exports = async (_, args, { prisma, session }, info) =>
  await prisma.user({ id: session.userId })
