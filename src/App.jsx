// @flow
import React from 'react'
import styled from '@emotion/styled'
import Hue from './components/atoms/Hue.jsx'
import theme from './theme.js'
import { ThemeProvider } from 'emotion-theming'

type Props = {
  className: string
}

const App = ({ className }: Props) => (
  <ThemeProvider theme={theme}>
    <div className={className}>
      <Hue title='hue hue br'>Another hue hue</Hue>
    </div>
  </ThemeProvider>
)

export default styled(App)`
  background-color: orange;
`
