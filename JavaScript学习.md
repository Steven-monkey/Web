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

- #### ES6中的类（class）

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

