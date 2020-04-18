# 						Ajax笔记

## 1.请求参数位置的问题

​    将请求参数传递到ajax函数内部，再函数内部根据请求方式的不同将请求参数放置在不同的位置

    get  放在请求地址的后面
    post 	放在send方法中
## 2.请求参数格式问题

​    application/x-www-form-urlencode
​        参数名称= 参数值&参数名称 =参数值
​        name=zhangsan&age=20
​    application/json
​        {name:'zhangsan',age:20}

## 3.formData对象方法

​        /*
​        get(key)
​        set("key"，"value")
​        delete("key","value")
​        append("key","value")
​        */
​    //get方法，获取表单对象属性的值
   
​    //set方法，设置表单对象属性的值,如果表单值存在则会覆盖之前的表单值
​    formData.set('username', 'monkey')
​    //set方法，如果表单值不存在，则会创建表单值
​    formData.set('age', 1000)
​    //append方法，向表单对象中追加值
​    formData.append('sex', 'man')

    （1).在二进制文件上传时
    this.files[0] 必须 **files**
    formData.append('attrName', this.files[0])

## 4.同源和非同源（非同源之间不能传递消息）

同源：两个页面之间的具有相同的协议、域名、端口，则这两个网站是同源的
http://www.monkey.com/dir/page.html
http:协议
www.×××.com:域名
http://www.monkey.com:81/dir/page.html
:81：是端口号
http://www.monkey.com/dir02/otherpage.html
这两个网站是同源的

## 5.使用JSONP解决同源限制问题

（1).将不同源的服务器端请求地址写在script标签的src属性中

<script src="www.example.com"></script>  //网址格式
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script> //文件格式
（2).服务器端响应数据必须是一个函数的调用，真正发送给客户端的数据需要作为函数的调用参数。
const data='fn({name:"张三",age:"20"})'
res.send(data)
(3).在客户端全局作用域下定义函数fn
(4).在fn函数内部对服务器端返回的数据处理