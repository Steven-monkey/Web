# 					JavaScript学习

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

  

