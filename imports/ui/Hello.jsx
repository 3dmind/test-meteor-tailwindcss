import React, { Component } from 'react';

export class Hello extends Component {
  state = {
    counter: 0,
  };

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div className={'3dmind-w-full sm:3dmind-w-1/2'}>
        <button
          className={'3dmind-bg-primary-light hover:3dmind-bg-primary-dark 3dmind-text-white 3dmind-font-bold 3dmind-py-2 3dmind-px-4 3dmind-rounded'}
          onClick={() => this.increment()}>
          Click Me
        </button>
        <p className={'3dmind-mb-2'}>
          You've pressed the button {this.state.counter} times.
        </p>
      </div>
    );
  }
}
