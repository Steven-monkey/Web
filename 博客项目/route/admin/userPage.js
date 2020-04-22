//导入用户集合构造函数
const { User } = require('../../model/user')
module.exports = (req, res) => {
    User.find({})
    //将用户信息从数据库中查询出来
    res.render('admin/user')
}