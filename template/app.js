//导入模板引擎
const template = require('art-template')
const path = require('path')
const views = path.join(__dirname, 'views', 'index.html')
const html = template(views, {
    name: '康彦军',
    age: 22
})
console.log(html);
