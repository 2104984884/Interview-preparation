import React from 'react';

export default class Order extends React.Component {
  childRef = React.createRef()
  parentRef = React.createRef()
  child = (e) => {
    console.log('child')
    // e.stopPropagation();  
  }
  parent = (e) => {
    console.log('parent')
  }
  componentDidMount() {
    document.addEventListener('click', () => {
      console.log('document');
    })
    this.childRef.current.addEventListener('click', () => {
      console.log('child1');
    })
    this.childRef.current.addEventListener('click', () => {
      console.log('parent2');
    })
  }
  render() {
    return (
      <div onClick={this.parent} ref={this.parentRef}>
        <div onClick={this.child} ref={this.childRef}>
          child
        </div>
      </div>
    )
  }
}