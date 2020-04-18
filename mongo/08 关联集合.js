const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/monkey', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch((err) => console.log(err, '数据库连接失败'));

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
})
const authorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
})
const Post = mongoose.model('Post', postSchema)
// Post.create({ title: '武汉加油', author: '5e994c8b4d29733ac292286a' })
//     .then(result => console.log(result))
const Author = mongoose.model('User', authorSchema)
// Author.create({ name: '康彦军', age: 22, })
//     .then(result => console.log(result))
Post.find().populate('Author').then(result => console.log(result))