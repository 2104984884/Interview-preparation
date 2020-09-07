import React, { useState } from 'react';
import ReactDom from 'react-dom';

const useState = (function () {
  
})()
function App() {
  const [count, setCount] = useState(0);//记住上一次的count
  //count 因为useState(0) 执行难道不应该是0吗    //闭包  记住上一次的state
  let c = 0;
  return (
    <div>
      {count}
      <button onClick={() => { setCount(count + 1) }}>+</button>
    </div>
  )
}

function render() {
  ReactDom.render(App, document.getElementById('root'));
}