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

const style = () => css``

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
