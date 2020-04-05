const express = require('express')
const admin = express.Router()
admin.get('/index', (req, res) => {
    res.send('这是博客的登陆页面')
})
module.exports = admin