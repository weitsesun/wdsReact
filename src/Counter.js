import React, { Component } from 'react';
import { ThemeContext } from './App';
export default class Counter extends Component {
  constructor(props) {
    //makes your prop to setup properly every time you over write your constructor
    super(props);

    this.state = {
      count: props.initialCount,
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(style => {
          return (
          <div>
            {console.log('counter is rendered')}
            <div>Counter</div>
            <button style={style} onClick={() => this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>+</button>
          </div>)
        })}
      </ThemeContext.Consumer>

    );
  }

  changeCount(amount) {
    this.setState(prev => ({ count: prev.count + amount }));
  }
}