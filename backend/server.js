const express = require('express')
const cors = require('cors')
const book = require('./routes/book')
const app = express()

app.use(cors('*'))
app.use(express.json())

app.use('/book',book)

app.listen(4000,'0.0.0.0',()=>{
    console.log('Server listening on port 4000')
})