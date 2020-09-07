// 为什么叫proxy
// let target = {};//对象 数据劫持  代理模式
// let p = new Proxy(target, {})
// p.a = 37
// target.b = 22
// console.log(target)


// var handler = {
//   get: function (target, name) {
//     return name in target ? target[name] : 37;
//   }
// }

// var p = new Proxy({}, handler);
// p.a = 1
// p.b = undefined;
// // p.c=22
// console.log(p.a, p.b)
// console.log('c' in p, p.c)



let validator = {
  set: function (obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new Error('the age is not an integer')
      }
      if (value > 200) {
        throw new RangeError('the age seems invalid')
      }
    }
    obj[prop] = value;
    return true
  }
}
let person = new Proxy({}, validator);
person.age = 2000;
console.log(person.age)