const { model, Schema } = require('mongoose')
const RatedQuestionSchema = require('../schemas/RatedQuestion')

const IsiQuestionGroupSchema = new Schema({
  interpretation: String,
  questions: { 
    q1: RatedQuestionSchema,
    q2: RatedQuestionSchema,
    q3: RatedQuestionSchema,
    q4: RatedQuestionSchema,
    q5: RatedQuestionSchema,
    q6: RatedQuestionSchema,
    q7: RatedQuestionSchema
  }
})

module.exports = model('IsiQuestionGroup', IsiQuestionGroupSchema)
