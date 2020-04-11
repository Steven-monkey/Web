// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 接收post请求参数
const formidable = require('formidable');
// 实现session功能
var session = require('express-session');
// 创建web服务器
const app = express();
// 接收post请求参数


// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', (req, res) => {
	const result = 'fn({name:"康彦军"})'
	res.send(result)
});
app.get('/better', (req, res) => {
	//接收客户端传递过来的函数名称
	// const fnName = req.query.callback;
	//将函数名称对应的函数调用代码返回给客户端
	// const result = fnName + '({name:"康彦军"})'
	// setTimeout(() => {
	// 	res.send(result)
	// }, 1000)
	res.jsonp({ name: 'monkey', age: 20 })
})
// 监听端口
app.listen(3001);
// 控制台提示输出
console.log('服务器启动成功');