// let obj = { p: '1', b: { c: 2 }, d: [1, 2, 3] };
let obj = {
  _hello: 'hello world' //表示私有变量
};

Object.defineProperty(obj, 'hello', {
  get() {
    console.log('get');
    return this._hello;
  },
  set: function (value) {
    console.log('set');
    this._hello = value;
  }
});

console.log(obj.hello)