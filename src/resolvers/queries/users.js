module.exports = async (_, args, { prisma }, info) => {
  return await prisma.users()
}
