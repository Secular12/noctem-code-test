const {
  api: { host, port },
  db
} = require('./config')

const express = require('express')
const app = express()
const http = require('http')
const mongoose = require('mongoose')

mongoose.connect(db.url, {
  pass: db.password,
  useNewUrlParser: true,
  user: db.user,
  useUnifiedTopology: true
})

const database = mongoose.connection

database.on('error', error => console.error(error))
database.on('once', () => console.log('Connected to database'))

app.use(express.json())

const isiQuestionsGroupRouter = require('./routes/isiQuestions')

app.use('/isi-questions', isiQuestionsGroupRouter)

http
  .createServer(app)
  .listen(port, host, () => {
    console.log(`listening on: https://${host}:${port}`)
  })
