import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { Global, css } from '@emotion/core'

const globalStyle = css`
  body {
    padding: 0;
    margin: 0;
  }
`

ReactDOM.render(
  <>
    <Global styles={globalStyle} />
    <App />
  </>,
  document.getElementById('root')
)
