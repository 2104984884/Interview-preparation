import React from 'react';
const context = React.createContext();

class BrowserRouter extends React.Component {
  state = {
    pathname:'/'
  }
  update = (pathinfo) => {
    // 强制更新一下
    console.log(111)
    this.setState(pathinfo)
  }
  componentDidMount() {
    window.addEventListener('popstate', () => {
      this.setState({
        pathname:window.location.pathname
      })
    })
  }
  render() {
    console.log(22332)
    return (
      <context.Provider value={{
        pathname: this.state.pathname,
        update: this.update
      }}>
        {this.props.children}
      </context.Provider>
    )
  }
}

export { BrowserRouter, context }