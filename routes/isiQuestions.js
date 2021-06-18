const express = require('express')
const router = express.Router()
const IsiQuestionGroup = require('../models/IsiQuestionGroup')
const getIsiQuestionGroup = require('../middleware/getIsiQuestionGroup')
const { interpretIsiRating } = require('../lib/questionHelpers')

router.get('/', async (req, res) => {
  try {
    const isiQuestionGroups = await IsiQuestionGroup.find()

    res.json(isiQuestionGroups)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/', async (req, res) => {
  const questions = req.body.questions ?? []

  const isiQuestionGroup = new IsiQuestionGroup({
    questions,
    interpretation: interpretIsiRating(questions)
  })

  try {
    const newIsiQuestionGroup = await isiQuestionGroup.save()

    res.status(201).json(newIsiQuestionGroup)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get('/:id', getIsiQuestionGroup, async (req, res) => {
  res.json(res.IsiQuestionGroup)
})

router.patch('/:id', getIsiQuestionGroup, async (req, res) => {
  const questions = req.body.questions ?? []

  res.IsiQuestionGroup.interpretation = interpretIsiRating(questions)
  res.IsiQuestionGroup.questions = questions

  try {
    const updatedIsiQuestionGroup = await res.IsiQuestionGroup.save()

    res.json(updatedIsiQuestionGroup)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/:id', getIsiQuestionGroup, async (req, res) => {
  try {
    await res.subscriber.remove()
    res.json({ message: 'Deleted ISI Question Group' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
