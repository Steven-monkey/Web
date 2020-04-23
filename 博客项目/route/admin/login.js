// import { mod } from "prelude-ls"
const brcypt = require('bcrypt')
const { User } = require('../../model/user')
module.exports = async (req, res) => {
    const { email, password } = req.body
    if (email.trim().length == 0 || password.trim().length == 0) return res.status(400).render("admin/error", { msg: '邮件或者密码错误' })
    //根据邮箱地址查询用户信息
    //如果查询到了用户，user变量的值是对象类型
    //如果没有查询到用户 user变量为空
    let user = await User.findOne({ email })
    if (user) {
        let isValue = brcypt.compare(password, user.password)
        if (isValue) {
            req.session.username = user.username;
            //用户重定向
            res.redirect('/admin/user')
            req.app.locals.userInfo = user;
        } else {
            res.status(400).render('admin/error', { msg: '邮箱地址或者密码错误' })
        }
    } else {
        res.status(400).render('admin/error', { msg: '邮箱地址或者密码错误' })
    }

}