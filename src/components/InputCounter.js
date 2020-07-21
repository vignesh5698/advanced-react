import React, { Component } from 'react'
import withCounter from './withCounter';

class InputCounter extends Component {
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

export default withCounter(InputCounter, 2);
