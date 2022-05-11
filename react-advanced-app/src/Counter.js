import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increase = () => {
    this.setState((state) => ({ count: this.state.count + 1 }));
  };
  render() {
    return (
      <div>
        you clicked {this.state.count} times <p />
        <button onClick={this.increase}> click me </button>
      </div>
    );
  }
}
