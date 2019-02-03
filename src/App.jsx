// @flow
import React from 'react'
import styled from '@emotion/styled'
import Hue from './components/atoms/Hue.jsx'

type Props = {
  className: string
}

const App = ({ className }: Props) => (
  <div className={className}>
    <Hue title='hue hue br'>Another hue hue</Hue>
  </div>
)

export default styled(App)`
  background-color: orange;
`
