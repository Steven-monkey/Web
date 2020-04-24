//引入mongoose模块
const mongoose = require('mongoose')
//创建文章的集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 20,
        minlength: 4,
        required: [true, '请填写文章标题'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请传递作者']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
})
//根据规则常见集合
const Atricle = mongoose.model('Atricle', articleSchema)
//将集合规则作为模块成员进行导出
module.exports = {
    Atricle
}