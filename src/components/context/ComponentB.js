import React, { Component } from 'react'
import ComponentC from './ComponentC';

const ThemeContext = React.createContext('light');

const UserContext = React.createContext({
  name: 'Guest',
});

class ComponentB extends Component {

  render() {
    const {signedInUser, theme} = {signedInUser: 'vignesh', theme: 'dark'};

    return (
      <div>
        <ComponentC/>
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={signedInUser}>
            <this.Layout />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }

  Layout = () => {
    return (
      <div>
        <this.Content />
      </div>
    );
  }
  
  
  Content() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <UserContext.Consumer>
            {user => (
              <div>
                user={user} theme={theme}
              </div> 
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ComponentB;
