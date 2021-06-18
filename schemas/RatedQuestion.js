const { Schema } = require('mongoose')

module.exports = new Schema({ 
  value: {
    default: 0,
    type: Number 
  }
})
