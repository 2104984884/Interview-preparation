const _ = require('lodash');
//这里相当于两个类 分别实现各自的功能 现在需要合并功能 类里面通过继承可以实现
//在函数中怎么做  通过组合 组合的应用就是redux  
function fn1(str) {
  return str + 'def'
}
function fn2(str) {
  return str.toUpperCase()
}
const fn = flow([fn1, fn2]);
console.log(fn('abc'));

// 手写一个flow 接受一些方法 组合所有的函数

function flow(fns) {
  return function (defaultValue) {
    let res = defaultValue;
    while (fns.length) {
      let first = fns.shift()
      res = first(res);
    }
    return res
  }
}