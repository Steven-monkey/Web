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
        type: Number,
        //数值最小值
        min: 18,
        //数值的最大值
        max: 100,
    },
    publicDate: {
        type: Date,
        //default:默认值
        default: Date.now
    },
    category: {
        type: String,
        //文档中可以拥有的字段
        enum: ['html', 'javaScript', 'javascript', 'css'],
        message: '自定义名称要在一定的范围内'
    },
    author: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length > 4
            },
            message: '传入的值不符合验证规则'
        }
    }
})
const Post = mongoose.model('Post', postSchema)
Post.create({ title: '新闻直播间', age: 20, category: 'css', author: 'pesis' })
    .then(result => console.log(result))
    .catch(error => {
        const err = error.errors;
        for (attr in err) {
            console.log(err[attr]['message']);
        }
    })