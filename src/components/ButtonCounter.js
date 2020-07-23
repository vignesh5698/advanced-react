import React, { Component } from 'react'
import withCounter from './withCounter';
import { UserContext } from './context/userContext';

class ButtonCounter extends Component {
  static contextType = UserContext;
  render() {
    const { count, onAdd } = this.props;
    return (
      <div>
        Context: {this.context}
        <button onClick={onAdd}> Button Click Counter: {count}</button>
      </div>
    )
  }
}

export default withCounter(ButtonCounter, 10);
