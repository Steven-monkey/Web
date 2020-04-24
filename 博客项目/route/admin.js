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
//修改路由
admin.post('/user-modify', require('./admin/user-modify'))
//删除路由
admin.get('/delete', require('./admin/user-delete'))
//文章列表页面路由
admin.get('/article', require('./admin/article'))
//文章编辑页面路由
admin.get('/article-edit', require('./admin/article-edit'))
//实现文章添加功能的路由
admin.post('/article-add', require('./admin/article-add'))
module.exports = admin