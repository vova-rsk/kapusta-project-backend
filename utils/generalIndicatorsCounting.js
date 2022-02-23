const { CATEGORY_TYPES } = require('./constants')

const generalIndicatorsCounting = report => {
  return report.reduce((acc, elem) => {
    const tmp = [...acc]

    elem.type === CATEGORY_TYPES.INCOME
      ? tmp[0] += elem.total
      : tmp[1] += elem.total

    return tmp
  }, [0, 0])
}

module.exports = generalIndicatorsCounting
