import React, { Component } from 'react'
import withCounter from './withCounter';

export class ButtonCounter extends Component {
  render() {
    const { count, onAdd } = this.props;
    return (
      <div>
        <button onClick={onAdd}> Button Click Counter: {count}</button>
      </div>
    )
  }
}

export default withCounter(ButtonCounter);
