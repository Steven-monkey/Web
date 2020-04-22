//引入用户集合的构造函数
const { User, validateUser } = require('../../model/user')
const bcrypt = require('bcrypt')
module.exports = async (req, res) => {
    try {
        await validateUser(req.body)
    } catch (error) {
        // return res.redirect(`/admin/user-edit?message=${error.message}`)
        return next(JSON.stringify({ path: '/admin/user-edit', message: error.message }))
    }
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        // return res.redirect(`/admin/user-edit?message=邮箱地址以被占用`)
        return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱地址以被占用' }))
    }
    //对密码进行加密
    //生成随机字符串
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt)
    //替换密码
    req.body.password = password
    //将用户信息添加到数据库中
    await User.create(req.body)
    //将页面重定向到用户列表页面
    res.redirect('/admin/user');
}