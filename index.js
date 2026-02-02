const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,`photos/${Math.floor(Math.random() * 31) + 1}.jpg`))
})

app.listen(port)