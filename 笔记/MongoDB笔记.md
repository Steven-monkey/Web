# 						MongoDB笔记

- #### Mac安装MongoDB时需要关闭本机SIP

  - ##### 终端执行

  ```
  csrutil status ---检查SIP是否开启   System.....:enabled  开启状态
  csrutil disable ---检查SIP是否开启  successfully....  	关闭状态
  ```

- #### 当文件再只读文件下时：获取操作权限

  - ##### 终端执行

  ```
  sudo mount -uw /
  killall Finder
  ```

- #### 使用MongoDB的基本步骤

  - ##### 连接数据库

    ```JavaScript
    //引入mongoose第三方模块，用来操作数据库
    const mongoose = require('mongoose')
    //数据库连接
    mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
        //连接成功
        .then(() => {
            console.log('数据库连接成功');
            //连接失败
        })
      	.catch(err => {
            console.log(err, '数据库连接失败');
        })
    ```

  - ##### 创建集合规则

    ```javascript
    //创建集合规则
    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        isPublished: Boolean
    })
    ```

  - ##### 使用规则创建集合

    ```JavaScript
    //使用规则创建集合
    //mongoose.model(参数1：集合名词，参数2：集合规则(也就是Schema一个实例对象))
    const Course = mongoose.model('Course', courseSchema)
    const course = new Course({
        name: '第一个数据库',
        author: 'monkey',
        isPublished: true,
    })
    ```

  - ##### 保存数据库

    ```JavaScript
    //保存数据库
    course.save()
    ```

- #### 导入外部数据库

  - ##### 将mongoimport添加到环境变量

    ```
    <添加环境变量>
    vim ~/.bash_profile
    <添加环境变量格式>：
    export PATH=${PATH}:<PATH 1>
    例子：
    	export JAVA_HOME = /home/myuser/jdk1.7.0_03
    	export PATH = $JAVA_HOME/bin:$PATH
    <重新载入配置文件>
    source <相应文件配置文件>
    source .bash_profile
    ```

  - ##### 导入数据库数据

    ```
    mongoimport -d 数据库名字  -c 集合名称 --file 要导入
    mongoimport -d playground -c users --file ./user.json
    ```

- #### 查询文档

  - ##### find方法

    ```javascript
    // 查询所有用户文档
    User.find().then(result => console.log(result));
    // 查询部分用户文档 find方法 用{_id:'id值'}
    User.find({ _id: '5c09f1e5aeb04b22f8460965' }).then(result =>console.log(result));
    ```

  - ##### findOne方法

    ```JavaScript
    //查询部分用户文档 findOne方法 用{name:''}
    User.findOne({ name: '王二麻子' }).then(result => console.log(result))
    ```

  - ##### 匹配大小

    ##### (>) 大于 - $gt

    ##### (<) 小于 - $lt

    ##### (>=) 大于等于 - $gte

    ##### (<= ) 小于等于 - $lte

  - ##### 匹配包含--$in

    ```javascript
    //使用方式
    User.find({ age: { $gt: 20, $lt: 40 } }).then(result => console.log(result))
    //匹配包含
    User.find({ hobbies: { $in: ['足球'] } }).then(result => console.log(result))
    ```

  - ##### 匹配查询字段 （查询字段之间用空格隔开，不想要查询的字段前加`-`）

    ```JavaScript
    					//select('想要查询的字段 <用空格隔开多个>  不想要查询的字段前加 ‘-’ +不想查询的字段')
    User.find().select('name email -_id').then(result => console.log(result))
    	User.find().select('name email -_id').then(result => console.log(result))
    ```

  - ##### 将数据按照升降序进行排序

    ```JavaScript
    //两种语法
    User.find().sort({ 'age': 1 }).then(result => console.log(result))
    User.find().sort('-age').then(result => console.log(result))
    ```

  - ```JavaScript
    //skip跳过当前多少条数据，limit限制查询数据
    User.find().skip(2).limit(2).then(result => console.log(result))
    ```

- #### 删除文档

  - ##### findOneAndDelete()方法

  ```javascript
  //查找到一条文档并删除
  //返回删除的文档
  User.findOneAndDelete({ _id: '5c09f2d9aeb04b22f846096b' }).then(result => console.log(result))
  ```

  - ##### deleteMany()方法

  ```javascript
  //删除多个文档
  //返回一个对象 n:表示个数   OK：表示成功  deletedCount：删除个数{ n: 5, ok: 1, deletedCount: 5 }
  User.deleteMany({}).then(result => console.log(result))
  ```

- #### 更新文档

  - ##### updateOne()方法

  ```javascript
  //updateOne({查询条件},{要修改的值})
  User.updateOne({ name: '李四', }, { name: '李狗蛋' }).then(result => console.log(result))
  ```

  - ##### updateMany()方法

  ```javascript
  //updateMany({查询条件},{要修改的值})
  User.updateOne({}, { age: 22 }).then(result => console.log(result))
  ```

- #### Mongoose文档验证

  - ##### 验证文档

  ```JavaScript
  const postSchema = new mongoose.Schema({
      title: {
          //标题类型
          type: String,
          //必须字段（必须填写）
          required: true,
          //最小字段
          minlength: 2,
          //最大字段
          maxlength: 5,
          //去除字符串两边空格
          trim: true
      },
    	age: {
          type: Number,
          //数值最小值
          min: 18,
          //数值的最大值
          max: 100,
      },
      publicDate: {
          type: Date,
          //default:默认值
          default: Date.now
      },
    	category: {
          type: String,
          //文档中可以拥有的字段
          enum: ['html', 'javaScript', 'javascript', 'css']
      },
    	validate:{
        validator:v=>{
          return v && v.length > 4
        },
        message:'传入的值不符合验证规则'
      }
  })
  ```

  - ##### 控制台输出错误信息

  ```JavaScript
  Post.create({ title: '新闻直播间', age: 20, category: 'css', author: 'pesis' })
      .then(result => console.log(result))
      .catch(error => {
          const err = error.errors;
          for (attr in err) {
              console.log(err[attr]['message']);
          }
      })
  ```

- #### 集合关联

  - 