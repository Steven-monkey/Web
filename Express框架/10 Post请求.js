const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/add', (req, res) => {
    res.send(req.body)
})
app.listen(3000)