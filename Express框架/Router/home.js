const express = require('express')
const home = express.Router()
home.get('/index', (req, res) => {
    res.send("这是博客的首页")
})
module.exports = home