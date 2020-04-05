//引入express框架
var express = require('express')
//创建网站服务器
const app = express()

app.get('/require', (req, res, next) => {
    req.name = "张三",
        next()
})
app.get('/require', (req, res) => {
    res.send(req.name)
})
app.listen(3000);
console.log('服务启动成功');
