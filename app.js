const express = require('express')
const app = express()
const config = require('./config')

app.listen(config.api.port, () => {
  console.log(`listening on port: ${config.api.port}`)
})