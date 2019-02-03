/* @flow */
import React, { type StatelessFunctionalComponent } from 'react'
import styled from '@emotion/styled'

type Props = {
  children: string,
  title: string
}

const Hue = ({ className, children, title }) => (
  <div className={className}>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
)

const HueStyled = (styled(Hue)`
  background-color: orange;
  h1 {
    color: rebeccapurple;
  }
  div {
    color: black;
    font-size: 2rem;
    font-family: monospace;
  }
`: StatelessFunctionalComponent<Props>)

export default HueStyled
