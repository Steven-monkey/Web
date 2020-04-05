const express = require("express")

const app = express()
app.get('/', (req, res) => {
    res.send("你好，express")
})
app.get('/list', (req, res) => {
    res.send({
        name: '康彦军',
        age: 20
    })
})
app.listen(4000)
console.log('服务器启动成功');
