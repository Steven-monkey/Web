//引入express框架
const express = require('express')
const admin = express.Router()
//渲染登陆页面
admin.get('/login', require('./admin/loginPage'))
admin.post('/login', require('./admin/login'))
//创建用户列表路由
admin.get('/user', require('./admin/userPage'))
admin.get('/logout', require('./admin/loginOut'))
admin.get('/user-edit', require('./admin/user-edit'))
admin.post('/user-edit', require('./admin/user-edit-fn'))
module.exports = admin