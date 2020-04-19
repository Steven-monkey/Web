//引入express框架
const express = require('express')
const admin = express.Router()
admin.get('/login', (req, res) => {
    res.render('admin/login')
})
admin.post('/login', (req, res, next) => {
    res.send(req.body)
    // const { email, password } = req.body
    // if (email.trim().length == 0) {
    //     return res.status(400).send("<h2>邮件密码错误</h2>")
    // }
    next()
})
admin.get('/user', (req, res) => {
    res.render('admin/user')
})
module.exports = admin