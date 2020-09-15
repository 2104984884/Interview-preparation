import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from './react-redux';
import Clock from './useClock'
let action1 = {
  type: 'INCREMENT'
}
let action2 = {
  type: 'DECREMENT'
}
function reducer(state = 1, action) {
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}
let store = createStore(reducer);
//store 其实就是一个普通的js变量  怎么和react绑定在一起

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <Clock />
  </Provider>,
  document.getElementById('root')
);

