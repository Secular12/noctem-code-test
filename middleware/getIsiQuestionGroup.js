const IsiQuestionGroup = require('../models/IsiQuestionGroup')

module.exports = async (req, res, next) => {
  try {
    const isiQuestionGroup = await IsiQuestionGroup.findById(req.params.id)

    if (isiQuestionGroup === null) {
      return res.status(404).json({ message: `Cannot find an ISI Question Group with the ID: ${req.params.id}` })
    }

    res.IsiQuestionGroup = isiQuestionGroup
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  next()
} 