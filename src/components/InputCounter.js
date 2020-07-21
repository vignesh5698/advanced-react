import React, { Component } from 'react'
import withCounter from './withCounter';

export class InputCounter extends Component {
  render() {
    const { count, onAdd } = this.props;
    return (
      <div>
        <input type="text" onKeyPress={onAdd}/>
        Input Key Press Counter: {count}
      </div>
    )
  }
}

export default withCounter(InputCounter);
