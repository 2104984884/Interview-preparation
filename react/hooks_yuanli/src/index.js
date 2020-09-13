import React from 'react';
import ReactDOM from 'react-dom';

// 为了减少组件渲染  可以进行优化，设置组件的属性变了才重新渲染，没变不渲染
let hookStates = [];//保存状态的数组 
let hookIndex = 0;//索引
function useState(initialState) {
  hookStates[hookIndex] = hookStates[hookIndex] || initialState;
  let currentIndex = hookIndex;
  function setState(newState) {
    hookStates[currentIndex] = newState;
    render();
  }
  return [hookStates[hookIndex++], setState];
}
function useCallback(callback, dependencied) {
  if (hookStates[hookIndex]) {//说明不是第一次
    let [lastCallback, lastDependencies] = hookStates[hookIndex]
  } else {//第一次
    hookStates[hookIndex++] = [callback, dependencied];
    return callback;
  }
}
let Child = ({ data, onButtonClick }) => {
  console.log('Child render');
  return <button onClick={onButtonClick}>{data.number}</button>
}
Child = React.memo(Child);
function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('珠峰');
  let data = React.useMemo(() => ({ number }), [number]);//参数1 生成对象的工厂  参数2 依赖项
  let addClick = React.useCallback(() => setNumber(number + 1), [number]);
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <Child data={data} onButtonClick={addClick} />
    </div>
  )
}
function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
render();
