//导入用户集合构造函数
const { User } = require('../../model/user')
module.exports = async (req, res) => {
    //表示当前访问的是用户管理页面
    req.app.locals.currentLicnk = 'user'
    //接受客户端传递过来的当前页参数
    let page = req.query.page || 1
    //每页显示的条数
    let pageSize = 10;
    //查询用户数据的总数
    let count = await User.countDocuments({})
    //总页数
    let total = Math.ceil(count / pageSize);
    //页码对应的数据查询开始的位置
    let start = (page - 1) * page
    //将用户信息从数据库中查询出来
    const users = await User.find({}).limit(pageSize).skip(start)
    //渲染用户列表模块
    res.render('admin/user', {
        users: users,
        page: page,
        total: total,
    })
}