const {Schema, model} = require('mongoose')

const schema = new Schema ({
   order_num:{
      type: String
   },
   name:{
      type: String
   },
   phone:{
      type: String
   },
   method:{
      type: String
   },
   post_data:{
      type: String
   },
   goods:{
      type: String
   },
   amount:{
      type: String
   }
})

module.exports = model ('orders', schema)