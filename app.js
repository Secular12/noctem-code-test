const {
  api: { host, port },
  db: { url: dbUrl }
} = require('./config')

const express = require('express')
const app = express()
const http = require('http')
const mongoose = require('mongoose')

mongoose.connect(dbUrl, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', error => console.error(error))
db.on('once', () => console.log('Connected to database'))

app.use(express.json())

const isiQuestionsGroupRouter = require('./routes/isiQuestions')

app.use('/isi-questions', isiQuestionsGroupRouter)

http
  .createServer(app)
  .listen(port, host, () => {
    console.log(`listening on: https://${host}:${port}`)
  })
