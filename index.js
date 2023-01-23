const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/login.router')
const debtRouter = require('./routes/debts.router')
const orderRouter = require('./routes/order.routes')
const picRouter = require('./routes/picture.routes')
const contactUsRouter  =require('./routes/contactUs.router')
const PORT = process.env.PORT || 8080
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', [userRouter, authRouter, debtRouter, orderRouter, contactUsRouter, picRouter])

async function start (){
      mongoose.connect('mongodb+srv://Sergey:12Serg0591@cluster0.itzqa8j.mongodb.net/orders', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         })   
      .then(() => console.log("Database connected!"))
      .catch(err => console.log(err));
      app.listen(PORT, () =>{console.log('server has just started with MongoDB! ' + PORT)})
}

start ()



