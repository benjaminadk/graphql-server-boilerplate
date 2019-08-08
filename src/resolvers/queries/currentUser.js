module.exports = async (_, args, { prisma, session }, info) => {
  if (!session.userId) {
    return null
  } else {
    return await prisma.user({ id: session.userId })
  }
}
