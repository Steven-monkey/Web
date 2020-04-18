//导入express框架
const express = require('express');
//引入mongoose框架
const mongoose = require('mongoose');
const app = express()
const url = require('url')
//数据默认端口：27017
mongoose.connect('mongodb://localhost:27017/monkey', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch((err) => console.log(err, '数据库连接失败'));
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 20,
        max: 80
    },
    passworld: String,
    emial: String,
    hobbies: [String]
});
const User = mongoose.model('User', userSchema)
// User.create({ name: '康彦军', age: 22, passworld: 'kyj20200202', emial: '445928814@qq.com', hobbies: ['爱璐璐', '爱阿年', '爱生活'] })
app.get('/list', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>用户列表</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
    </head>
    
    <body>
        <div class="container">
            <h6>
                <a href="add.html" class="btn btn-primary">添加用户</a>
            </h6>
            <table class="table table-striped table-bordered">
                <tr>
                    <td>用户名</td>
                    <td>年龄</td>
                    <td>爱好</td>
                    <td>邮箱</td>
                    <td>操作</td>
                </tr>
                <tr>
                    <td>张三</td>
                    <td>20</td>
                    <td>
                        <span>抽烟</span>
                        <span>喝酒</span>
                        <span>烫头</span>
                    </td>
                    <td>zhangsan@itcast.cn</td>
                    <td>
                        <a href="" class="btn btn-danger btn-xs">删除</a>
                        <a href="" class="btn btn-success btn-xs">修改</a>
                    </td>
                </tr>
            </table>
        </div>
    </body>
    
    </html>`)
})



app.listen(2020)
console.log('服务器启动成功');
