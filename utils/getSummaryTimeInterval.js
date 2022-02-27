const getSummaryTimeInterval = date => {
  const currentDate = new Date(date)
  const startInterval = new Date(currentDate.getFullYear(), 0, 0, 23, 59, 59)
  const endInterval = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 0, 0, 0)

  return [startInterval, endInterval].map(elem => elem.toISOString())
}

module.exports = getSummaryTimeInterval
