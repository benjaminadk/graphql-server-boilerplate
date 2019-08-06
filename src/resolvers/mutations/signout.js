const removeAllUserSessions = require('../../utils/removeAllUserSessions')

module.exports = async (_, args, { session, redis }, info) => {
  // get userId from session
  const { userId } = session

  // remove all sessions from redis
  if (userId) {
    removeAllUserSessions(userId, redis)
    session.destroy(err => {
      if (err) console.log(err)
    })

    // success payload
    return {
      success: true,
      message: 'User signout success'
    }
  }

  //  failure payload
  return {
    success: false,
    message: 'User signout failed'
  }
}
