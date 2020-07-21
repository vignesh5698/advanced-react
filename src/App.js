import React from 'react';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import HoverCounter from './components/HoverCounter';
import InputCounter from './components/InputCounter';

function App() {
  return (
    <div className="App">
      <ButtonCounter name="Button" />
      <HoverCounter />
      <InputCounter />
    </div>
  );
}

export default App;
