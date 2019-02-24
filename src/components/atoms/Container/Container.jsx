/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { capitalize } from '../../../lib/utils'

type Size = 'small' | 'medium' | 'large'

type Props = {
  /** Border radius of container */
  coner?: number[],
  /** Size of container */
  size?: Size,
  /** Dropshadow */
  hasDropShadow?: boolean,
  /** Container's content */
  children?: mixed
}

const style = ({ theme, hasDropShadow, coner, size }) => css`
  background: ${theme.color.White};
  box-shadow: ${hasDropShadow ? theme.boxShadow.Container : 'none'};
  font-family: ${theme.fontFamily.Ropa};
  border-radius: ${coner.map(val => val + 'px').join(' ')};
  padding: ${theme.padding.Container[capitalize(size)]};
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
