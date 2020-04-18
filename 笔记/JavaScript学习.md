# 					JavaScript基础

- #### 标识符的命名

  - ##### 变量的命名一般都是名词

  - ##### 函数的命名一般都是动词

- #### isNaN判断非数字

  ```javascript
  console.log(isNaN(20)) //false
  console.log(isNaN('你好')) //true
  ```

- #### 字符串转义字符

  ```
  \n	换行符
  \\	斜杠 \
  \t	缩进
  \b	空格，b是blank意思
  ```

- #### 浏览器颜色辩证类型

  ##### 蓝色：数字类型

  ##### 黑色：字符串类型

  ##### 深蓝色：布尔类型

  ##### 浅灰色：undefined、null

- #### 字符串类型转化

  ##### toString（）

  ##### String（number）

- #### 数据类型转化

  ##### parseInt（string）--整数类型

  ##### parseFloat（string）--浮点数类型

  ```javascript
  console.log(parseInt('120px'))   //输出120
  console.log(parseFloat('120px'))   //输出120
  ```

- #### 递增和递减

  ```javascript
  var num = 10;
  console.log(++num + 10);	//21
  
  //后置自增 口诀：先返回原值后加一
  var age = 10;
  console.log(age++ + 10);	//20
  ```

- #### 递增案例

  ```javascript
  var e = 10;
  //	e++=10 e=11
  //	++e=12 e=12
  var f = e++ + ++e
  console.log(f)  //22
  ```

- #### 递增总结

![image-20200324160619004](/Users/houjinshuang/JavaScript/JavaScript学习.assets/image-20200324160619004.png)

- #### 逻辑与 短路运算

  ```javascript
  表达式1 && 表达式2
  //	如果表达式1 结果为真  则返回表达式2  输入的是错误的，因为要告诉人们，这个是错的
  //	如果表达式1 结果为假  则返回表达式1	输入的是错误的，因为要告诉人们，这个是错的
  ```

- #### 逻辑或 短路运算

  ```javascript
  表达式1 || 表达式2
  //	如果表达式1 结果为真  则返回表达式1  输入的是正确的，因为要告诉人们，这个是对的
  //	如果表达式1 结果为假  则返回表达式2	输入的是错误的，因为要告诉人们，这个是也是对的
  ```

- #### switch 语句

  ##### 效率高

  ##### switch判断确定值，ifelse判断范围

  ```javascript
  //条件语句里面是全等的
  // 11==='11' 是不全等的
  switch(条件语句)
  ```

- #### 双重for循环

  ##### 外部循环体执行1次，里边的循环体要将所有循环执行完毕。

  ```JavaScript
  for (var i = 1; i <= 3; i++) {
              console.log('这次循环了' + i + '次')
              for (var j = 1; j <= 3; j++) {
                  console.log('==这里循环了' + j + '次')
              }
          }
  ```

- #### continue和break

  - ##### continue跳出了当前循环体，并且执行剩下循环。

  - ##### break跳出整个循环体。

  ```javascript
  for (var i = 1; i <= 3; i++) {
              if (i == 2) {
                //跳出了当前循环 i=2时的那一次循环
                  continue;
              }
              console.log('我现在再吃第' + i + '个包子')
          }
  //输入
  我现在再吃第1个包子
  我现在再吃第3个包子
  ```

- #### 数组扩容

  - ##### 通过`.length` 来扩容

  ```javascript
  var arr=['red','green','blue']
  arr.length=5	
  ```

  - ##### 新增数组元素，追加元素  不要直接给数组名赋值，否则数组元素都没有了

  ```javascript
  var arr=['red','green','blue']
  arr[3]='pink'
  ```

- #### 算法（深入研究一下，有点儿意思）

  ##### 总结规律，转化成代码

- #### 函数

  ```JavaScript
  function 函数名(形参1，形参2.....){ //声明是叫形参  形参接受实参  形参类似一个变量
    
  }
  函数名（实参1，实参2....） //调用时的是实参
  ```

  - ##### 如果实参的个数少于形参的个数，多余的形参会被自动定义为undefined，则会输入NaN

    因为形参可要看做是一个没有被定义的变量，输入的少了，则形参2未被定义，则为undefined

- #### 函数-返回值return

  函数负责处理事情，但不去输入事情，需要return来返回到函数调用

  ##### return 后面的代码不会被执行，return有终止函数的作用

  ##### return也可以返回数组内容

  ##### 函数如果有return，则返回的是return后面的值

  ##### 函数如果没有return，则返回的undefined

- #### 函数-arguments（只有函数才有argument对象，而且每个函数都内置好了arguments）

  ##### 当我们不确定有多少个参数传递的时候，可以用arguments来获取。（来接受实参的）

  - ##### 伪数组：具有length属性。

  - ##### 伪数组：可以按照数组的方式来便利arguments

  - ##### 按照索引的方式进行存储的

  - ##### 它没有真正数组的一些方法  pop()、push()

- #### 函数细节

  ```javascript
  //函数表达式
  var fun=function(){
    console.log()
  }
  //fun是变量名
  //这个函数是匿名函数
  //调用时 变量名（）
  ```

- #### 作用域

  - ##### 如果在函数内部，没有声明直接赋值的变量也属于全局变量

    ```javascript
    function fn(){
      var num1=10
      num2=20
    }
    fn()
    console.log(num1) //报错
    console.log(num2) //20
    ```

  - ##### 函数的的形参也可以看做是局部变量

  - ##### 从执行效率来看全局变量和局部变量

    - ##### 全局变量只有在浏览器关闭的时候才会销毁，比较占内存资源。

    - ##### 局部变量，当我们程序执行之后，就会被销毁。

- #### 作用域链

  ##### 内部函数访问外部函数的变量，采取的是链式查找的方式来决定取那个值，这种结构我们称为作用域链（就近原则）

- #### 预解析和代码执行

  - ##### 预解析  JavaScript引擎会把JavaScript代码里面所有的var、function提升到当前作用域的最前面

  - ##### 代码执行 按照代码的书写顺序以上而下的执行代码

- #### 预解析分为 变量预解析（变量提升）和函数预解析（函数提升）

  - ##### 变量提升----只提升声明，不提升赋值   就是把所有的变量声明提升到当前作用域最前面，不提升赋值提升

  - ##### 函数提升---全部都提升，包括函数体   就是把所有的函数声明提升到当前当前作用域的最前面  不调用函数

  - ##### 经典面试题

    ```javascript
    				f1()
            console.log(c);
            console.log(b);
            console.log(a);
            function f1() {
                var a = b = c = 9;
                console.log(a);
                console.log(b);
                console.log(c);
            }
            //分析预解析
            function f1() {
                //var a=b=c=9;
                //相当于var a=9,b=9,c=9 (b和c没有var 是直接赋值的)
                var a;
                a = b = c = 9;
                console.log(a); //9
                console.log(b); //9
                console.log(c); //9
            }
            f1()
            console.log(c); //9
            console.log(b); //9
            console.log(a); //报错（因为全局变量没有var a，var a;是局部变量）
    ```

- #### 对象（对象中的属性和方法）

  - ##### 字面量创建对象

    ##### 属性的使用：对象`. `  name

    ##### 方法的使用：对象`.`  play()   对象必须用`()`

    ```javascript
    var obj={
      name:'keke',
      age:18,
      play:function(){
        console.log("玩儿，就是玩儿")
      }
    }
    console.log(obj.name) //使用属性
    obj.play() //方法的使用
    ```

  - #### new Object创建对象

    ```javascript
    var obj=new Object()
    obj.name="帅哥"
    obj.age=18
    ```

  - #### 构造函数创建对象

    ```javascript
    //构造函数格式
    function 构造函数名() {    //构造函数名首字母大写
    this.属性 = 值;
    this.方法 = function () {
    		}
    }
    new 构造函数名（）
    
    //实例
    						function Start(uname, age, sex) {    //构造函数-  明星是泛指一大类
                this.name = uname;
                this.age = age;
                this.sex = sex;
                this.sing = function (sang) {
                    console.log(sang);
    
                }
            }
            var ldh = new Start('刘德华', 18, '男');   //对象则具体到某一个事物
            console.log(ldh.name);
            console.log(ldh.age);
            console.log(ldh.sex);
            ldh.sing('冰雨')
    ```

  - #### new关键字

    - ##### new 构造函数可以在内存中开辟一个空的对象

    - ##### this指向创建的空对象

    - ##### 执行构造函数里面的代码 给这个空对象添加属性和方法

    - ##### 返回这个对象

  - #### 遍历对象（for.....in.....)

    ```javascript
    function Start(uname, age, sex) {
                this.name = uname;
                this.age = age;
                this.sex = sex;
                this.sing = function (sang) {
                    console.log(sang);
    
                }
            }
            var ldh = new Start('刘德华', 18, '男');
            for (var key in ldh) {
                console.log(ldh[key]);  //必须这样使用
            }
    ```

    

- #### 内置对象（[查阅文档](https://developer.mozilla.org/zh-CN/)）

- #### 堆和栈（JavaScript中没有堆和栈）

  - ##### 栈：(操作系统) ：由操作系统自动分配释放存放函数的值、局部变量的值等。其操作方式类似于数据结构中的栈；简单数据类型存放到栈中。

  - ##### 堆（操作系统）：存储复杂类型（对象），一般由程序猿分配释放，若程序猿不释放，由垃圾回收机制回收。

![image-20200326132843141](/Users/houjinshuang/JavaScript/JavaScript学习.assets/image-20200326132843141.png)

```JavaScript
        function fn(a) {
            a++;
            console.log(a)
        }
        var x = 10;
        fn(x)   //11
        console.log(x)  //10
```

# 						JavaScript高级

- ### ES6中的类（class）

  ##### 类里面公用的属性和方法必须使用 this 来使用

  ##### 类和对象的区别：对象是特指的某一个，而类是泛指某一大类。（车就是类【class】特斯拉就是对象【Object】）

```javascript
//创建类  类名首字母大写
class Star {
  
};
//使用类创建一个对象
new Star();
```

- #### 类constructor构造函数（当new实例时，constructor自动调用）

  ##### constructor()方法是类的构造函数（默认方法），用于传递参数，返回实例对象。

  ##### 通过new命令生成对象实例时，自动调用该方法，如果没有显示定义，类内部会自动给我们常见一个constructor()

##### 类中添加属性

```javascript

class Star {
  constructor(uname){
    this.name=uname
  }
};
//使用类创建一个对象
new Star('刘德华');
```

##### 类中添加方法

```JavaScript
//创建类 添加属性
class Star {
  constructor(uname){
    this.name=uname
  }  //不需要添加都好分隔
  sing(song){
    console.log('刘德华常的歌是'：+song)
  }
};
//使用类创建一个对象
new Star('刘德华');
```

##### 类的继承	

##### 	extends：继承父类的属性和方法

```javascript
 				class Father {
            constructor() {

            }
            money() {
                console.log('这是你爹给你留下的100块钱')
            }
        }
				//继承了父亲所有东西  extends
        class Son extends Father {

        }
        var son = new Son()
        son.money()
```

#### 	super可以用来调用constructor中的函数

#### 	（相当于父类中的constructor=子类中的super）

##### 	super：调用构造函数和普通函数 （可以将子类的数据传递给父类）

```javascript
				class Father {
            constructor(x, y) {
                this.x = x;
                this.y = y
            }
            sum() {
                console.log(this.x + this.y)
            }
        }
        class Son extends Father {
            constructor(x, y) {
                super(x, y) //调用父类中的构造函数
            }
        }
        var son = new Son(1, 2)
        son.sum()
```

##### super：调用普通函数

```javascript
				class Father {
            say() {
                return "我的爸爸"
            }
        }
        class Son extends Father {
            say() {
              							//super.say()调用父类的普通函数
                console.log(super.say() + "的儿子")
            }
        }
        var son = new Son()
        son.say()
```

##### 		注意：子类在构造函数中使用super，必须放到this前面（必须先调用父类的构造方法，在使用子类构造方法）-------父类（亲）永远都是放在第一位的

#### 类里面this指向问题

- ##### constructor里面的this指向的是实例对象，方法里面的this指向的是这个方法的调用者

## 构造函数和原型：

- ##### 原型是一个对象。（prototype）

- ##### 原型作用：共享方法

- ##### 一般情况下，我们的公共属性定义到构造函数里面，公共的方法放在我们的原型对象身上。

  ```javascript
  function Star(name, age) {
              this.name = name;
              this.age = age;
          }
  				//prototype 添加公共方法
          Star.prototype.sing = function () {
              console.log('我会唱歌')
          }
  ```

- ##### 构造函数中`prototype` 和对象中的`__proto__`是相等的。

- ##### 原型对象（`prototype`）和对象原型（`__proto__`）

![image-20200327121926060](/Users/houjinshuang/JavaScript/JavaScript学习.assets/image-20200327121926060.png)

- #### 构造函数、原型对象和对象实例

  - ##### 构造函数（function）：构造函数再创建实例对象之前。

  - ##### 原型对象（prototype）：可以添加方法，减少储存

  - ##### 对象实例（__proto__）：new一个构造函数就创建了一个对象实例。

- #### 构造函数、原型对象和对象实例三者关系

  ![image-20200327123310426](/Users/houjinshuang/JavaScript/JavaScript学习.assets/image-20200327123310426.png)

  

- #### 原型链

  ![image-20200327123715364](/Users/houjinshuang/JavaScript/JavaScript学习.assets/image-20200327123715364.png)

  

- #### call()方法

  - ##### call()可以调用方法

  - ##### call()可以改变函数的this指向

  ```JavaScript
  function fn(){
    console.log("你就说我帅不帅");
    console.log(this) //this指向的是window
  }
  var 0={
    name:"monkey"
  }
  fn.call() //调用函数（call呼叫函数）
  fn.call(0)  //现在this指向的是monkey
  ```

- #### 借用构造函数继承父类属性

  ```javascript
  				function Father(name, age) {
              // this指向的是父构造函数的对象实例
              this.name = name;
              this.age = age;
          }
          function Son(name, age, score) {
              // this指向的是子构造函数的对象实例
            	//this参数就是，把父构造函数的this改成子构造函数的this
              Father.call(this, name, age)
              this.score = score;
          }
          var son = new Son('monkey', 18, 100)
          console.log(son);
  ```

### 函数

- #### 函数的调用

  - ##### 普通函数

    ```javascript
    function(){
      console.log("人生巅峰")
    }
    ```

  - ##### 对象方法

    ```javascript
    var o={
      sayHi:function(){
        console.log("人生巅峰")
      }
    }
    ```

  - ##### 构造函数

    ```JavaScript
    function Star(){};
    new Star();
    ```

  - ##### 绑定事件函数

    ```javascript
    btn.onclick=function(){}   //点击按钮就可以调用函数了
    ```

  - ##### 定时器函数

    ```JavaScript
    setInterval(function(){},1000)  //这个函数是定时器自动1秒钟调用一次
    ```

  - ##### 立即执行函数

    ```javascript
    (function(){
      console.log("人生巅峰")
    })()
    ```

### 严格模式

```javascript
1.给脚本设置严格模式
<script>
   "use strict"
</script>
2.给函数设置严格模式
(function(){
  "use strict"
})()
function(){
  "use strict"
}
```

### 高阶函数

##### 	高阶函数定义：对其他函数进行操作的函数，它接受函数作为参数或者将函数作为返回值

```javascript
函数作为参数
function(callback){
  callback&&callback
}
fn(function(){aleart('hi')})
函数作为返回值
function fn(){
  return function(){}
}
fn()
```

### 闭包

##### 	闭包定义：指有权访问另一个函数作用域中的变量的函数

#### 递归函数

​	递归函数：函数内部自己调用自己，这个函数就是递归函数

#### 深拷贝和浅拷贝

```javascript
var o = {
name: "康彦军",
age: 18
}
var obj = {}
//浅拷贝
console.log(Object.assign(o, obj));
```

# ECMAScript（ES6）

- #### let声明的变量只在所处的块级有效

  ##### 定义：在一对大括号中 使用let关键字声明的变量才具有块级作用域

```javascript
if(ture){
  let a=1;
}
console.log(a) //a is not undefined
```

- #### let不存在变量提升

```javascript
console.log(a); //a is not undefined
let a=10
```

- #### 暂时性死区

```javascript
				//暂时性死区
        var num = 10;
        if (true) {
            console.log(num) //num is a undefined
            let num = "abc"
        }
```

- #### const

  - ##### 具有块级作用域

  - ##### 声明常量是必须赋值

  - ##### 常量赋值后，值不能修改

  - ##### 声明常量，常量就是值（内存地址），不能变量的量。

    ```javascript
    const ary = [100, 200];
    ary[0] = 'a';
    ary[1] = 'b';
    console.log(ary);
    ary = ['a', 'b']
    ```

- #### 结构赋值

  ###### 	ES6中允许从数组中提取值，按照对应位置，对变量赋值，对象也可以实现解约。

  - ##### 数组结构

    ```javascript
    let [a, b, c] = [1, 2, 3]
    console.log(a);
    console.log(b);
    console.log(c);
    ```

  - 对象结构

- #### 箭头函数

  ```javascript
  //箭头函数
  ()=>{}
  //赋值函数
  const fn=()=>{}
  ```

  - ##### 箭头函数中this关键字，箭头函数中的this，指向的是函数定义的位置

  ```javascript
  var obj={
    age:20,
    sing()=>{
    //this指向的是obj
    console.log(this.age) //undefined  因为this指向的是obj对象，obj对象是window全局下的
  }
  }
  ```

- #### 剩余参数

  ```javascript
  function sum(first1,...args){
    console.log(first1)
    console.log(args)
  }
  sum(12,20,30)
  ```

- #### 扩展运算符

  #####  扩展运算符可以将数组、对象转为用逗号分隔的参数序列

  ```javascript
  let ary=[1,2,3]
  ...ary  //1,2,3
  console.log(...ary)//1 2 3
  ```

  - ##### 合并数组方法一

  ```javascript
  let ary1=[1,2,3]
  let ary2=[4,5,6]
  let ary3=[...ary1,...ary2]
  console.log(...ary3)
  ```

  - ##### 合并数组方法二

  ```JavaScript
  let ary1=[1,2,3]
  let ary2=[4,5,6]
  ary1.push(...ary2)
  console.log(...ary1)
  ```

- 模板字符串

  





















# this指向问题

```javascript
				function Star(name, age) {
            this.name = name;
            this.age = age;
        }
        Star.prototype.sing = function () {
            console.log('我会唱歌')
        }
        var ldh = new Star('刘德华', 18)
```

- ##### 在构造函数中，this指向的是实例对象。

- ##### 原型对象中的this指向的是，被调用者的实例对象。（谁调用，指向谁 ）

### 函数的不同调用方式决定了this的指向不同。

##### 	普通函数：`普通函数中的this指向是 window`

##### 	对象方法：`对象方法this指向的是对象本身`

##### 	构造函数：`构造函数this指向是new之后的实例对象`

##### 						构造函数.prototype.方法=function(){} this指向是之前的构造函数的实例

##### 	绑定事件函数：`绑定事件函数this指向是调用者`

##### 	定时器函数：`定时器的函数中this指向是window`

##### 	立即执行函数：`立即执行函数中this指向是window`

### 改变函数内this指向，JavaScript提供了三种方法 call(),apply(),bind()

#### call()改变this指向

```javascript
function Father(name,age,sex){
  this.name=name;
  this.age=age;
  this.sex=sex;
}
function Son(){
  //call()改变了方向
  Father.call(this,name,age,sex)
}
var son=new Son('刘德华',20,'男')
```

#### apply()改变this指向

##### 	apply(需要this改变的方向，数组)

```javascript
function Father(name,age,sex){
  this.name=name;
  this.age=age;
  this.sex=sex;
}
function Son(){
  //call()改变this方向
  Father.call(this,name,age,sex)
}
var son=new Son('刘德华',20,'男')
```

#### bind()只是改变this指向，不直接调用函数

```javascript
var 0={
  name:'monkey'
}
function fn(arr){
  consloe.log(this)
  console.log(arr)
}
//apply() 第二个参数必须是数组
fn.apply(0,['pink'])
```

### 严格模式下this指向

- ##### 严格模式下全局作用域函数中this指向的是undefined

- ##### 严格模式下构造函数不加new调用，this会报错

- ##### 严格模式下定时器this还是指向window

- ##### 严格模式下事件，对象还是指向调用者

- ##### 严格模式下函数的参数不能重复

- ##### 严格模式下函数中可以嵌套函数，非函数中不可以嵌套函数。

