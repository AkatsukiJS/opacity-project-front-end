import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { Global, css } from '@emotion/core'
import theme from './theme.js'
import { ThemeProvider } from 'emotion-theming'

const globalStyle = css`
  body {
    padding: 0;
    margin: 0;
    background-color: ${theme.color.LightestGray};
  }
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle} />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
