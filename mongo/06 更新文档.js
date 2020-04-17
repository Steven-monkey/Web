//引入mongoose第三档模块
const mongoose = require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("数据库连接成功");
    }).catch(err => {
        console.log(err, "数据库连接失败");
    })
//创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
})
//使用规则创建集合
const User = mongoose.model('User', userSchema)
// User.updateOne({ name: '李四', }, { name: '李狗蛋' }).then(result => console.log(result))
User.updateMany({}, { age: 22 }).then(result => console.log(result))