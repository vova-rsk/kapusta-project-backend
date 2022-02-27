const { nanoid } = require('nanoid')

const groupByUniqueDescriptions = arrayOfObjects => {
  return arrayOfObjects.reduce((acc, elem) => {
    const indexOfExistingElem = acc.findIndex(({ name }) => name === elem.name)

    indexOfExistingElem === -1
      ? acc.push({ id: nanoid(11), ...elem })
      : acc[indexOfExistingElem].total += elem.total

    return acc
  }, [])
}

module.exports = groupByUniqueDescriptions
