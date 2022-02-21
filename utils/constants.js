const SUCCESS_MESSAGES = {
  dbConnectionSuccess: 'Database connection successful',
  serverStartedSuccess: 'Server running. Use our API on port'
}

const ERROR_MESSAGES = {
  dbConnectionError: 'Cannot create connection to DB',
  invalidLoginData: 'Email or password is wrong',
  notFound: 'Not found',
  serverError: 'Server error',
  notAuthorized: 'Not authorized',
  invalidEmailFormat: 'Invalid email format',
  missingField: 'Missing required field',
  invalidPasswordFormat: 'Invalid password format',
  badRequest: 'Bad request',
  entryFeeMultipleSettingError: 'Entry fee can be setted only once',
  insufficientFunds: 'Insufficient funds',
  invalidValue: 'Invalid value',
  invalidNameValue: 'Invalid value of Name',
  invalidTypeValue: 'Invalid value of Type',
  missingTypeField: 'Missing required Type field',
  missingNameField: 'Missing required Name field'
}

const CATEGORY_TYPES = {
  income: 'income',
  cost: 'cost'
}

module.exports = {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  CATEGORY_TYPES
}
