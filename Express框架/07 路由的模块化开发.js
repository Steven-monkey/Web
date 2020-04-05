const express = require('express')
const app = express()
const home = express.Router()
app.use('/home', home)
home.use('/index', (req, res, next) => {
    res.send('这是博客的首页')
})
app.listen(8000)
console.log('服务器启动成功');
