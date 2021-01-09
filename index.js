const express = require('express') // #include 'express.h'
const router = require('./routes')
const bodyParser = require('body-parser')

let app = express()
const port = 1234
app.use(bodyParser.json())
app.use(router)

app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})