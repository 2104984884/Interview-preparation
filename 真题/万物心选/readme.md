1. es6 api
  let const 
  解构赋值 从数组（对象）中提取值,对变量进行赋值,方便获取数组(对象)中的某些项 
  Array.from 
  数组实例includes()
    判断数组是否包含某个值,返回true/false
    参数1为查找的内容
    参数2表示开始查找的位置

  fill()
    把数组进行填充
    参数1是填充的变量
    参数2是开始填充的位置
    参数3是填充结束的位置

  Array.of()
    将一组值(传入的参数)转变为数组

  Set()

    ES6中新增的内置对象.类似于数组,但成员的值都是唯一的没有重复的值(可以用来去重):
      方式一:[...new Set(arr)] 方式二: Array.from(new Set(arr))
  
  数组foreach和map的区别?
    foreach直接修改原数组,map是修改之后返回一个新修改过的数组,原数组不变.
2. promise all  race 

3. this 指向
箭头函数自己本身没有this  箭头函数this指向其执行上下文的this 即箭头函数在调用时就已经确定了 并且之后不会被改变 普通函数的this指向调用它的那个对象  箭头函数没有原型（所以它本身没有this，不能被new ）  call apply bind 也无法改变箭头函数的this 
4. bind call apply 

5. reduce 

6. css 弹性布局

7. 前端监控 埋点 怎么知道用户在某个区域停留了多久

8. 闭包

9. onload ready 

10. ajax获取数据的流程

11. 盒子模型  BFC 
