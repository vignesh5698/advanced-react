import React, { Component } from 'react'
import withCounter from './withCounter';

export class HoverCounter extends Component {
  render() {
    const { count, onAdd } = this.props;
    return (
      <div onMouseOver={onAdd}>
        Hover Counter: {count}   
      </div>
    )
  }
}

export default withCounter(HoverCounter);
