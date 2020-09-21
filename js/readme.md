1. typeof 只能区分值类型 不能区分引用类型(返回object)，可以区分函数function 
typeof能区分的五种基本类型：string、boolean、number、undefined、symbol和函数function
2. 可能发生类型转换  
- 字符串拼接   ==运算符 if语句  逻辑运算
3. JSON 是js一个内置对象 
 JSON.stringify({a:10,b:20}) 传对象转字符串
 JSON.parse('{"a":10,"b":20}') 传字符串转对象

4. 描述创建一个对象的过程
新生成了一个对象
链接到原型
绑定 this
返回新对象
5. this 的几种不同使用场景
作为构造函数执行
作为对象属性执行
作为普通函数执行(window)

6. ajax
  0 - (未初始化)      还没调用send()方法
  1 - (载入)            已调send() 方法，正在发送请求
  2 - (载入完成)     send()方法执行完成，已经接收到全部相应内容
  3 - (交互)            正在解析响应内容
  4 - (完成)            响应内容解析完成，可以在客户端调用了

  status说明

    2XX  - 表示成功处理请求。如200
    3XX  - 需要重定向，浏览器直接跳转
    4XX  - 客户端请求错误，如404
    5XX  - 服务器端错误

7. 数组去重
写出最简单JS的去重方式 

es6的new Set()方式

let array = [0, 3, 4, 5, 3, 4, 7, 8, 2, 2, 5, 4, 6, 7, 8, 0, 2, 0, 90];
[...new Set(array)]
复制代码
es5的Array filter()

[1, 3, 4, 5, 1, 2, 3, 3, 4, 8, 90, 3, 0, 5, 4, 0].filter(function (elem, index, Array) {
  return index === Array.indexOf(elem);
})
