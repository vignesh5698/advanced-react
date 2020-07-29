import React, { Component } from 'react'

class GeneralComp extends Component {

  render() {
    console.log('Normal Component')
    return (
      <div>
        Normal Component: {this.props.name}
      </div>
    )
  }
}

export default GeneralComp
