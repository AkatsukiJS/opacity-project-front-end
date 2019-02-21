/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Size = 'small' | 'medium' | 'large'

type Props = {
  /** Type of button */
  coner?: number[],
  /** Size of button */
  size?: Size,
  /** Dropshadow */
  hasDropShadow?: boolean,
  /** Container's content */
  children?: mixed
}

const style = ({ theme, hasDropShadow, coner }) => css`
  background: ${theme.color.White};
  box-shadow: ${hasDropShadow ? theme.boxShadow.Container : 'none'};
  font-family: ${theme.fontFamily.Ropa};
  border-radius: ${coner.map(val => val + 'px').join(' ')};
`

const StyledContainer = styled.div`
  ${style}
`

const Container = (props: Props) => <StyledContainer {...props} />

Container.defaultProps = {
  coner: [0, 0, 0, 0],
  hasDropShadow: true,
  size: 'medium'
}

export default Container
