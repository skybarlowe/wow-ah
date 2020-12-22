const { createError } = require('apollo-errors');

module.exports = {
  UnknownError: createError('UnknownError', {
    message: 'An unknown error has occurred',
  }),
  UnauthorizedError: createError('UnauthorizedError', {
    message: 'You are logged out',
  }),
  AlreadyAuthenticatedError: createError('AlreadyAuthenticatedError', {
    message: 'You are already authenticated',
  }),
}; 