const express = require('express')
const http = require('http')
const app = express()
const { api: { host, port } } = require('./config')

http
  .createServer(app)
  .listen(port, host, () => {
    console.log(`listening on: https://${host}:${port}`)
  })
