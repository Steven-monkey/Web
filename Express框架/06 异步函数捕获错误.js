const express = require("express")
const fs = require('fs')
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)
const app = express()
app.get('/index', async (req, res, next) => {
    try {
        await readFile('01 了解express.js')
    } catch (error) {
        next(error)
    }
})
app.listen(4000)
console.log('服务器启动成功');
