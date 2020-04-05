const express = require('express')
const app = express()
app.get('/index/:id/:name', (req, res) => {
    res.send(req.params)
})
app.listen(1000)