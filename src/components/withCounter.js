import React, { Component } from 'react';

const withCounter = (WrappedComponent, incrementor) => {
  class withCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0 
      }
    }

    onAdd = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementor };
      });
    }

    render() {
      return (
        <WrappedComponent
          onAdd={this.onAdd}
          count={this.state.count}
          {...this.props}
        />
      );
    }
    
  }
  return withCounter;
}

export default withCounter;