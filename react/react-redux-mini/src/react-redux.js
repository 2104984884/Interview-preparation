import React, { createContext } from 'react';
const context = createContext();
// context.Provider
class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (<context.Provider value={store}>
      {this.props.children}
    </context.Provider>)
  }
}
function connect(mapState, mapDispatch) {

  return function (Com) {
    return class Connecten extends React.Component {
      render() {
        let reduxState = { a: 1, b: 2 }//这个state是假的 现在要怎么从redux 里的真实state
        //state 在Provider上面  怎么获取  Consumer
        let filterProps = {};
        if (mapState) {
          filterProps = Object.assign(filterProps, mapState(reduxState))
        }
        if (mapDispatch) {
          filterProps = Object.assign(filterProps, mapDispatch())
        }
        return (
          <Com {...filterProps} />
        )
      }
    }
  }
}
export {
  context,
  Provider,
  connect
}
