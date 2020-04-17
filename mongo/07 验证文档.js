const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log('数据库连接失败'));
const postSchema = new mongoose.Schema({
    title: {
        //标题类型
        type: String,
        //必须字段（必须填写）
        required: true,
        //最小字段
        minlength: 2,
        //最大字段
        maxlength: 5,
        //去除字符串两边空格
        trim: true
    },
    age: {

    }
})
const Post = mongoose.model('Post', postSchema)
Post.create({})