//引入mongoose第三方模块，用来操作数据库
const mongoose = require('mongoose')
//数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    //连接成功
    .then(() => {
        console.log('数据库连接成功');
        //连接失败
    }).catch(err => {
        console.log(err, '数据库连接失败');
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
// .model(参数1：集合名词，参数2：集合规则(也就是Schema一个实例对象))
const User = mongoose.model('User', userSchema)
//查询所有用户文档
User.find().then(result => console.log(result))
//查询部分用户文档 find方法 用{_id:'id值'}
User.find({ _id: '5c09f1e5aeb04b22f8460965' }).then(result => console.log(result))
//查询部分用户文档 findOne方法 用{name:''}
User.findOne({ name: '王二麻子' }).then(result => console.log(result))
//条件查询---大小
// (>) 大于 - $gt
// (<) 小于 - $lt
// (>=) 大于等于 - $gte
// (<= ) 小于等于 - $lte
User.find({ age: { $gt: 20, $lt: 40 } }).then(result => console.log(result))
//条件查询---包含
User.find({ hobbies: { $in: ['足球'] } }).then(result => console.log(result))
//条件查询---选择性查询
User.find().select('name email -_id').then(result => console.log(result))
//根据年龄来升序排列
User.find().sort({ 'age': -1 }).then(result => console.log(result))
User.find().sort('-age').then(result => console.log(result))
//skip跳过当前多少条数据，limit限制查询数据
User.find().skip(2).limit(3).then(result => console.log(result))


