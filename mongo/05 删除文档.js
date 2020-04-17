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
//查找到一条文档并删除
//返回删除的文档
// User.findOneAndDelete({ _id: '5c09f2d9aeb04b22f846096b' }).then(result => console.log(result))
//删除多个文档
User.deleteMany({}).then(result => console.log(result))