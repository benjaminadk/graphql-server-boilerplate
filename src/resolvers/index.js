module.exports = {
  Query: require('./queries'),
  Mutation: require('./mutations'),
  Payload: {
    __resolveType(obj, cxt, info) {
      if (obj.user) {
        return 'UserPayload'
      }
      return 'BasicPayload'
    }
  }
}
