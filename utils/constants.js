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

const AUTHORIZATION_TYPE = {
  BY_GOOGLE: 'byGoogle',
  BY_EMAIL: 'byEmail'
}

const MONTHS = {
  0: 'Январь',
  1: 'Февраль',
  2: 'Март',
  3: 'Апрель',
  4: 'Май',
  5: 'Июнь',
  6: 'Июль',
  7: 'Август',
  8: 'Сентябрь',
  9: 'Октябрь',
  10: 'Ноябрь',
  11: 'Декабрь'
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
  invalidNameValue: 'Invalid name field value',
  invalidTypeValue: 'Invalid type field value',
  missingTypeField: 'Missing required type field',
  missingNameField: 'Missing required name field',
  missingTypeQueryString: 'Missing required type query string',
  invalidTypeQueryStringFormat: 'Invalid value of type query string',
  missingPeriodQueryString: 'Missing required period query string',
  invalidPeriodQueryStringFormat: 'Invalid value of period query string',
  missingIdQueryString: 'Missing required transactionId query string',
  invalidIdQueryStringFormat: 'Invalid value of transactionId query string',
  missingDateField: 'Missing required date field',
  invalidDateFormat: 'Invalid date field format',
  invalidDateValue: 'Invalid date field value',
  missingAmountField: 'Missing required amount field',
  invalidAmountValue: 'Invalid amount field value',
  missingDescriptionField: 'Missing required description field',
  invalidDescriptionValue: 'Invalid description field value',
  missingCategoryField: 'Missing required category field',
  invalidCategoryValue: 'Invalid category field value',
  missingYearQueryString: 'Missing required year query string',
  invalidYearQueryStringFormat: 'Invalid year query string format',
  outOfRangeYearQueryString: 'Year query string value is out of range (1900-9999)',
  invalidMonthQueryStringFormat: 'Invalid month query string format',
  missingMonthQueryString: 'Missing required month query string',
  outOfRangeMonthQueryString: 'Month query string value is out of range (0-11)',
  missingTokenField: 'Missing required token field'
}

module.exports = {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  CATEGORY_TYPES,
  TRANSACTION_TYPES,
  REQ_VALIDATION_TARGET,
  MONTHS,
  AUTHORIZATION_TYPE
}
