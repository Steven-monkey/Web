const express = require('express')
const path = require('path')
const app = express()
const fs = require("fs")
const bodyParser = require('body-parser')
app.get('/first', (req, res) => {
    res.send("你好，阿贾克斯");
})
app.get('/responseData', (req, res) => {
    res.send({ 'name': '康彦军' })
})
app.get('/get', (req, res) => {
    res.send(req.query)
})
app.post('/post', (req, res) => {
    res.send(req.body)
})
app.post('/json', (req, res) => {
    res.send(req.body)
})
app.get('/error', (req, res) => {
    res.status(400).send('not no')
})
app.get('/catch', (req, res) => {
    fs.readFile("./text.txt", (err, result) => {
        res.send(result)
    })
})
app.use(express.static(path.join(__dirname, 'public')));
app.listen(2000)
console.log("服务器启动成功");
