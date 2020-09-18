### 滴滴一面

1. 你怎么理解闭包？闭包会有什么问题，（我回答内存泄漏然后回答垃圾回收机制 ）

2. 介绍一下盒模型

   1. 盒模型就是 将**content内容区域+padding+border+margin**

      使用box-sizing

      - content-box:W3C结构的盒模型，设置高度是 只设置content的高度，盒子的实际高度会大于你设置的高度。
      - border-box:IE盒模型，告诉浏览器盒子内容是你设置的高度-边框-padding

3. margin重叠问题

   对于上下margin有用，左右margin没有用

4. 高度塌陷问题

   脱离了标准流。使下面的盒子移上来；

   如果使用float脱离标准流的话，使用伪元素来清除浮动：after

   ```css
   content: ""; /* 添加内容 */ 	
   clear: both; /* 清楚两侧浮动 */ 		
   display: block; /* 转换元素类型为块元素 */ 			
   height: 0; 			
   overflow: hidden; /* 溢出隐藏属性 */ 		
   visibility: hidden;/* 隐藏属性 */
   
   ```

5. BFC你是怎么理解的

6. 你是怎么理解Promise的

7. 你为什么会使用hooks

8. 响应式原理

9. 事件循环

10. 为什么循环组件的时候要加key

11. 给一个非空数组，取出数组的第三大的数字，若没有就取出最大的


### 

  - css 正方形

  css 考点 display /block/inline/inline-block/table/table-cell/grid/flex/none
  BFC 

  难点 ：不定宽  如何让高使之跟着变

## 响应式编程的核心是什么
  - 设计模式
  - Object.definePropety() vue2.0依赖的api
    Proxy
    Object.observer

- 手写MVVM 
  1. Object.defineProperty  已经被代替  有缺陷
  用的是数据劫持  vue2.0 中如何去实现
  set 时
  2. 订阅发布者模式
    读数据时 实例化一个订阅者
  3. 模板编译

- diff 算法 


- 要会MVVVM 手写  包括es6 api + 订阅发布者模式  diff算法

- 一道数据结构 + 动态规划算法题