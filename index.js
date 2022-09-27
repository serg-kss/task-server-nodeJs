const express = require('express')
const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/login.router')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', [userRouter, authRouter])


app.listen(PORT, () =>{console.log('server has just started! ' + PORT)})

