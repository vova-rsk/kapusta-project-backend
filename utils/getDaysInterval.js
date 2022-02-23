const getDaysInterval = date => {
  const basicDate = new Date(date)
  const basicYear = basicDate.getFullYear()
  const basicMonth = basicDate.getMonth()
  const basicDay = basicDate.getDate()

  const startInterval = new Date(basicDate, basicMonth, basicDay - 1, 23, 59, 59)
  const endInterval = new Date(basicYear, basicMonth, basicDay + 1, 0, 0, 0)

  return [startInterval, endInterval].map(elem => elem.toISOString())
}

module.exports = getDaysInterval
