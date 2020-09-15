import React from 'react';
import './App.css';
import { context, connect} from './react-redux';

function App(props) {
  const context1 = React.useContext(context);
  console.log(context1, props.count);
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapDispatchToProps = () => {
  return {}
}
const mapStateToProps = (state) => {
  return {
    count: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
//connect 原理
//1.拿到mapStateToProps的返回值 调用一下
//2.把返回值放到<App  ...props/> 
