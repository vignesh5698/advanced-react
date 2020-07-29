import React, { Component } from 'react'
import GeneralComp from './GeneralComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Vignesh'
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Vignesh'
      })
    // }, 2000);
    }, 300000); // 300 Seconds
  }

  render() {
    const { name } = this.state;
    console.log('Parent Component');

    return (
      <div>
        Parent Component
        <GeneralComp name={name} />
        <PureComp name={name} />
        <MemoComp name={name}/>
      </div>
    )
  }
}

export default ParentComp
