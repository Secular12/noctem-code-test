const { model, Schema } = require('mongoose')
const RatedQuestionSchema = require('../schemas/RatedQuestion')

const IsiQuestionGroupSchema = new Schema({
  interpretation: String,
  questions: [RatedQuestionSchema]
})

module.exports = model('IsiQuestionGroup', IsiQuestionGroupSchema)
