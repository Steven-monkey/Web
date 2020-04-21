const mongoose = require('mongoose')
//导入密码加密模块
const bcrypt = require('bcrypt')

//创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
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
        maxlength: 100
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
async function createUser() {
    const salt = await bcrypt.genSalt(10)
    const pass = await bcrypt.hash('123', salt)
    const user = await User.create({
        username: '康彦军',
        email: '123@qq.com',
        password: pass,
        role: 'admin',
        state: 0
    })
}
// createUser()
//将用户集合作为模块成员进行导出
module.exports = {
    User,
}