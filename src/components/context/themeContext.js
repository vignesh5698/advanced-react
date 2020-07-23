import React from 'react'

const ThemeContext = React.createContext('dark')

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer }
export { ThemeContext };