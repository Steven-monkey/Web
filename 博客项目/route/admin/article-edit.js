module.exports = (req, res) => {
    //表示当前访问的是用户管理页面
    req.app.locals.currentLicnk = 'user'
    res.render('admin/article.art')
}