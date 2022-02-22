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

// const ERROR_MESSAGES = {
//   missingTypeField: 'missing required type field',
//   invalidTypeValue: 'invalid type value',
//   missingDescriptionField: 'missing required description field',
//   invalidDescriptionValue: 'invalid description value (must be between 2 and 20 characters, starting with letters and consisting of letters, numbers and spaces )',
//   missingDateField: 'missing required date field',
//   invalidDateFormat: 'invalid date format (must be in ISO 8601 format)',
//   missingCategoryField: 'missing required category field',
//   invalidCategoryFormat: 'invalid category format',
//   missingAmountField: 'missing required amount field',
//   invalidAmountFormat: 'invalid amount format',
//   missingOwnerField: 'missing required owner field',
//   invalidOwnerFormat: 'invalid owner format',
//   missingIdQueryString: 'missing required query string of transactionId',
//   invalidIdQueryStringFormat: 'invalid transactionId query string format',
//   missingTypeQueryString: 'missing required query string of type',
//   invalidTypeQueryStringFormat: 'invalid transactionId query string format',
//   missingPeriodQueryString: 'missing required query string of period',
//   invalidPeriodQueryStringFormat: 'invalid period query string format',
//   outOfRangePeriodQueryString: 'period query string data is out of range (1900-9999)',
//   missingYearQueryString: 'missing required query string of year',
//   invalidYearQueryStringFormat: 'invalid year query string format',
//   outOfRangeYearQueryString: 'year query string data is out of range (1900-9999)',
//   invalidMonthQueryStringFormat: 'invalid month query string format',
//   missingMonthQueryString: 'missing required query string of month',
//   outOfRangeMonthQueryString: 'month query string data is out of range (0-11)',
//   missingNameField: 'missing required name field',
//   invalidNameValue: 'invalid name value (must be between 2 and 20 characters, starting with letters and consisting of letters, commas and spaces )'
// }

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

module.exports = {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  CATEGORY_TYPES,
  TRANSACTION_TYPES,
  REQ_VALIDATION_TARGET
}
