const { UserInputError } = require('apollo-server-express')

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const usernameLength = 3
const passwordLength = 8

module.exports = (mode, args) => {
  const inputErrors = {}
  if (mode === 'signup') {
    if (!args.name) inputErrors.name = 'Name field is required'
    if (args.name.length < usernameLength) inputErrors.name = 'Name must be 3 at least characters'
    if (!args.email) inputErrors.email = 'Email field is required'
    if (!emailRegex.test(args.email)) inputErrors.email = 'Invalid email address'
    if (!args.password) inputErrors.password = 'Password field is required'
    if (args.password.length < passwordLength)
      inputErrors.password = 'Password must be 8 at least characters'
  } else if (mode === 'signin') {
    if (!args.email) inputErrors.email = 'Email field is required'
    if (!emailRegex.test(args.email)) inputErrors.email = 'Invalid email address'
    if (!args.password) inputErrors.password = 'Password field is required'
    if (args.password.length < passwordLength)
      inputErrors.password = 'Password must be at least 8 characters'
  } else if (mode === 'forgotPasswordChange') {
    if (!args.newPassword) inputErrors.newPassword = 'Password field is required'
    if (args.newPassword.length < passwordLength)
      inputErrors.password = 'Password must be at least 8 characters'
  }

  if (Object.keys(inputErrors).length > 0) {
    throw new UserInputError(`Mutation Failed`, { inputErrors })
  }
}
