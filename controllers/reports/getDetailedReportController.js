const { getDetailedReport } = require('../../services')
const { getMonthOfYearInterval, createUrl } = require('../../utils')

const getDetailedInfo = async (req, res) => {
  const { _id: owner } = req.user
  const { year, month } = req.query

  const result = {
    totalIncome: 0,
    totalCosts: 0,
    categories: []
  }

  const [minPeriod, maxPeriod] = getMonthOfYearInterval(year, month)

  const detailedReport = await getDetailedReport(owner, minPeriod, maxPeriod)

  if (detailedReport) {
    const { report, totalIncome, totalCosts } = detailedReport

    // make icon Url for each category
    report.forEach((elem, i) => {
      report[i].iconUrl = createUrl({ req, urlCombinedPath: elem.iconUrl })
    })

    result.totalIncome = totalIncome
    result.totalCosts = totalCosts
    result.categories = report
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    result
  })
}

module.exports = getDetailedInfo
