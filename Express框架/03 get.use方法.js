//引入express框架
var express = require('express')
//创建网站服务器
const app = express()

//接受所有请求中间件
app.use((req, res, next) => {
    console.log('请求走了app.use中间件');
    next();
})
//也可以走部分请求
app.use('/request', (req, res, next) => {
    console.log('请求走了app.use中间件的 request');
    next();
})
app.get('/list', (req, res, next) => {
    res.send('list')
    next()
})
app.get('/require', (req, res, next) => {
    req.name = "张三",
        next()
})
app.get('/require', (req, res) => {
    res.send(req.name)
})
app.listen(3000);
console.log('服务启动成功');
