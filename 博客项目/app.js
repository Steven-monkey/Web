//引入express框架
const express = require('express')
const path = require('path')
//引入post模块
const bodyParser = require('body-parser')
//引入session模块
const session = require('express-session')
require('./model/connect')
//创建网站服务器
const app = express()
//引入路由模块
const home = require('./route/home')
const admin = require('./route/admin')
//处理post请求,放在所有use前面
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({ secret: 'secret key', resave: true, saveUninitialized: true, }))
//开放静态资源
app.use(express.static(path.join(__dirname, 'public')))
//告诉express框架模板所在位置
app.set('views', path.join(__dirname, 'view'))
//告诉express框架模板的默认后缀是什么
app.set('view engine', 'art')
//当渲染后缀为art的模板时，所使用的模板引擎是什么
app.engine('art', require('express-art-template'))
app.use('/admin', require('./middleware/loginGurd'))
//为路由匹配请求路劲
app.use('/home', home)
app.use('/admin', admin)
app.use((err, req, res, next) => {
    const result = JSON.parse(err)
    return res.redirect(`${result.path}?message=${result.message}`)
})
//监听端口
app.listen(80)
//输出内容
console.log("网站服务器启动成功");