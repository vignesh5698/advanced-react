import React from 'react';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import HoverCounter from './components/HoverCounter';
import InputCounter from './components/InputCounter';
import { UserProvider } from './components/context/userContext';
import ComponentA from './components/context/ComponentA';
import { ThemeProvider } from './components/context/themeContext';
import RefsDemo from './components/RefsDemo';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <ButtonCounter name="Button" />
      <HoverCounter />
      <InputCounter />

      <UserProvider value="contextTest">
        <ThemeProvider value="light">
          <ComponentA />
        </ThemeProvider>
      </UserProvider>

      <RefsDemo />
      <ParentComp />
    </div>
  );
}

export default App;
