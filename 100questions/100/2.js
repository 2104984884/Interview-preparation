// 函数和构造函数 既统一又分离  
const Person = function (name) {
  this.name = name
  return {
    name:'asdas'
  };
}

Person.prototype.sayName = function () {
  console.log(this.name);
}

const person = new Person('aaaa');
console.log(person.name);
console.log(person.sayName);
console.log(person instanceof Person)