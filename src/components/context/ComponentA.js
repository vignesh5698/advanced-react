import React, { Component } from 'react'
import ComponentB from './ComponentB';
import { ThemeConsumer } from './themeContext';

export class ComponentA extends Component {
  render() {
    return (
      <div>
        <ThemeConsumer>
          {(theme => (
            <div>THEME: {theme}</div>
          ))}
        </ThemeConsumer>
        <ComponentB />
      </div>
    )
  }
}

export default ComponentA
