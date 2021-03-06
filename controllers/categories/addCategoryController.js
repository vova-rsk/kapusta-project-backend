const { Category } = require('../../models')
const { createUrl } = require('../../utils')

const addCategory = async (req, res) => {
  const result = await Category.create(req.body)

  const { _id, type, name, iconUrl } = result

  res.status(201).json({
    status: 'success',
    code: 201,
    result: {
      _id,
      type,
      name,
      iconUrl: createUrl({ req, urlCombinedPath: iconUrl })
    }
  })
}

module.exports = addCategory
