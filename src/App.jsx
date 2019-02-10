// @flow
import React from 'react'
import styled from '@emotion/styled'
import { Button } from './components'
import theme from './theme.js'
import { ThemeProvider } from 'emotion-theming'

type Props = {
  className: string
}

const App = ({ className }: Props) => (
  <ThemeProvider theme={theme}>
    <Button type='secondary'>OpacityProj</Button>
  </ThemeProvider>
)

export default styled(App)`
  background-color: white;
`
