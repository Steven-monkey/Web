const mongoose = require('mongoose')
//创建用户集合规则
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20
    },
    role: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        default: 0
    }
}
)
const User = mongoose.model('User', userSchema)
// User.create({
//     userName: '康彦军',
//     email: '123456@qq.com',
//     password: "kyj20200202",
//     role: 'admin',
//     state: 0
// })
//将用户集合作为模块成员进行导出
module.exports = {
    User,
}