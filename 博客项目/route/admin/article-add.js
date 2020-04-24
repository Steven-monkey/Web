const formidable = require('formidable')
const path = require('path')
const { Atricle } = require('../../model/article')
module.exports = (req, res) => {
    //创建表单解释对象
    const form = new formidable.IncomingForm()
    //配置上传文件的存储位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads')
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        // res.send(files.cover.path.split('public')[1])
        await Atricle.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content,
        });
        res.redirect('/admin/article')
    })
}