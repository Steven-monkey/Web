const { Atricle } = require('../../model/article')
const pageination = require('mongoose-sex-page')

module.exports = async (req, res) => {
    //接受客户端传递过来的页码
    const page = req.query.page;
    //表示当前访问的是用户管理页面
    req.app.locals.currentLicnk = 'article';
    //查询所有文章数据
    //page(1).size(2).displate(3).exec()
    //page:指定当前页
    //size:指定每页显示的数据条数
    //displate:指定客户端显示的页码数量
    //exec:向数据库发送请求
    let articles = await pageination(Atricle).find().populate('author').page(page).size(2).display(3).exec()
    // res.send(articles)
    res.render('admin/article.art', {
        articles: articles
    })
}