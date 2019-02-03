/* @flow */
/** @jsx jsx */
import { type StatelessFunctionalComponent } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Props = {
  children: string,
  title: string
}

const Hue = ({ className, children, title }) => (
  <div className={className}>
    <h1>{title}</h1>
    <div css={css`border: 9px solid black;`}>{children}</div>
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
