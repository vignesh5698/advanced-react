import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    //  default method
    this.inputRef = React.createRef()
    //  callback ref method
    this.cbRef = null;
    this.setRef = element => {
      this.cbRef = element
    }
  }
  
  componentDidMount() {
    // React.createRef mehod
    // this.inputRef.current.focus()  //  *uncomment
    
    //  callback ref method
    if(this.cbRef) {
      this.cbRef.focus();
    }
  }

  onClickRef = () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setRef}/>
        <button onClick={this.onClickRef}> click ref demo</button>
      </div>
    )
  }
}

export default RefsDemo
