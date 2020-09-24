import { createElement, Component, render } from './toy-react.js';
class MyComponent extends Component {
  render() {
    return
    <div>toy react</div>
    { this.children }
  }
}

render(<MyComponent id="a" class="b">
  <div></div>
  <div></div>
  <div></div>
</MyComponent>, document.body);