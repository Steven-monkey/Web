const mongoose = require('mongoose')
//验证模块
const Joi = require('joi')
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
//验证用户信息
const validateUser = (user) => {
    //对象的验证规则
    const Schema = {
        username: Joi.string().min(2).max(10).required().error(new Error("用户名不符合样式")),
        email: Joi.string().email().required().error(new Error("邮箱格式不符合样式")),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error("密码格式不符合样式")),
        role: Joi.string().valid('normal', 'admin').required().error(new Error("角色值非法")),
        state: Joi.number().valid(0, 1).required().error(new Error("状态值非法"))
    };
    //实施验证
    return Joi.validate(user, Schema)
}
//将用户集合作为模块成员进行导出
module.exports = {
    User,
    validateUser
}