import React, { Component } from 'react'
import { UserConsumer } from './userContext';

export class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(user) => {
          return <div> Hello.... Props: {user}</div>
        }}
      </UserConsumer>
    )
  }
}

export default ComponentC
