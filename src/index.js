import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#95be49',
    lightGrey: '#f0f0f0',
    grey: '#d3d3d3',
    darkGrey: '#333',
    error: '#f44336',
    red: '#ff2929',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
