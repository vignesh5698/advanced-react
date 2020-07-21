import React, { Component } from 'react';

const withCounter = (WrappedComponent) => {
  class withCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0 
      }
    }

    onAdd = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      });
    }

    render() {
      return (
        <WrappedComponent
          onAdd={this.onAdd}
          count={this.state.count}
        />
      );
    }
    
  }
  return withCounter;
}

export default withCounter;