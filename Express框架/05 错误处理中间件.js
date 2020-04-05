const express = require("express")
const fs = require('fs')

const app = express()

app.get('/index', (req, res, next) => {
    // throw new Error('程序发生了未知错误')
    fs.readFile('01 了解express.js', 'utf8', (err, data) => {
        if (err != null) {
            next(err)
        } else {
            res.send(data)
        }
    })
})
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})
app.listen(4000)
console.log('服务器启动成功');
