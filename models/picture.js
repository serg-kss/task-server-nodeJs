const {Schema, model} = require('mongoose')

const schema = new Schema ({
   pic:{
      type: String
   }   
})

module.exports = model ('picture', schema)