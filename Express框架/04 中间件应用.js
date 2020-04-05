const express = require("express")

const app = express()
// app.use((req, res, next) => {
//     res.send("网站在正在维护")
// })
app.use(('/admin'), (req, res, next) => {
    let flag = true;
    if (flag) {
        res.send("祝您访问愉快")
    } else {
        res.send("您未登录成功，不能访问网站")
    }
    next()
})
app.use((req, res, next) => {
    res.status(404).send('您访问的页面不存在')
})
app.listen(8080)
console.log('服务器启动成功');
