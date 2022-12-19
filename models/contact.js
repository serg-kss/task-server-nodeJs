const {Schema, model} = require('mongoose')

const message = new Schema ({
   name:{
      type: String
   },
   email:{
      type: String
   },
   message:{
      type: String
   },
})

module.exports = model ('messages', message)