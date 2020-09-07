import React from 'react';
import ReactDom from 'react-dom';
//react 使用链表存储state
//preact 使用的是数组 一个小型react库
let hooks = []//代表当前组件用到的所有的hook闭包里面的变量
let currentIndex = 0;
const useState = (function () {
  return function (initValue) {
    //currentIndex 组件里面hook调用的顺序 自增
    //不能出现在类似if里面去 因为if 可能成立 可能不成立 hook就可能没被调用到 顺序就会出错
    if (!hooks[currentIndex]) hooks[currentIndex] = [];
    let hookState = hooks[currentIndex];
    hookState[0] = hookState[0] || initValue;
    function setState(newState) {
      hookState[0] = newState;
      render();
    }
    hookState[1] = setState;
    currentIndex++;
    return hookState
  }
})()
// const useState = (function () {
//   let _state;
//   return function (initValue) {
//     _state = _state || initValue
//     function setState(newState) {
//       _state = newState;
//       render();
//     }
//     return [_state, setState]
//   }
// })()
function App() {
  const [time, setTime] = useState(4);
  const [count, setCount] = useState(0);//记住上一次的count
  //count 因为useState(0) 执行难道不应该是0吗    //闭包  记住上一次的state
  // let c = 0;
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      {time}
      <button onClick={() => setTime(time + 1)}>setTime</button>
    </div>
  )
}
render();
function render() {
  currentIndex = 0;
  ReactDom.render(<App />, document.getElementById('root'));
}