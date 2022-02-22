const CATEGORY_TYPES = {
  INCOME: 'income',
  COST: 'cost'
}

const TRANSACTION_TYPES = {
  ALL: 'all',
  DEBIT: 'debit',
  CREDIT: 'credit'
}

const REQ_VALIDATION_TARGET = {
  BODY: 'body',
  QUERY: 'query',
  PARAMS: 'params'
}

const SUCCESS_MESSAGES = {
  dbConnectionSuccess: 'Database connection successful',
  serverStartedSuccess: 'Server running. Use our API on port'
}

const ERROR_MESSAGES = {
  dbConnectionError: 'Cannot create connection to DB',
  invalidLoginData: 'Email or password is wrong',
  notFound: 'Not found',
  internalServerError: 'Internal Server error',
  notAuthorized: 'Not authorized',
  invalidEmailFormat: 'Invalid email format',
  missingField: 'Missing required field',
  invalidPasswordFormat: 'Invalid password format',
  badRequest: 'Bad request',
  entryFeeMultipleSettingError: 'Entry fee can be setted only once',
  insufficientFunds: 'Insufficient funds',
  invalidValue: 'Invalid value',
  invalidNameValue: 'Invalid "name" field value',
  invalidTypeValue: 'Invalid "type" value',
  missingTypeField: 'Missing required "type" field',
  missingNameField: 'Missing required "name" field',
  missingTypeQueryString: 'Missing required "type" query string',
  invalidTypeQueryStringFormat: 'Invalid value of "type" query string',
  missingPeriodQueryString: 'Missing required "period" query string',
  invalidPeriodQueryStringFormat: 'Invalid value of "period" query string',
  missingIdQueryString: 'Missing required "transactionId" query string',
  invalidIdQueryStringFormat: 'Invalid value of "transactionId" query string',
  missingDateField: 'Missing required "date" field',
  invalidDateFormat: 'Invalid "date" field format',
  invalidDateValue: 'Invalid "date" field value',
  missingAmountField: 'Missing required "amount" field',
  invalidAmountValue: 'Invalid "amount" field value',
  missingDescriptionField: 'Missing required "description" field',
  invalidDescriptionValue: 'Invalid "description" field value',
  missingCategoryField: 'missing required "category" field',
  invalidCategoryValue: 'invalid category field value'
}

module.exports = {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  CATEGORY_TYPES,
  TRANSACTION_TYPES,
  REQ_VALIDATION_TARGET
}
