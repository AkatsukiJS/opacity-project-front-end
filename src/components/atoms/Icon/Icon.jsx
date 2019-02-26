/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { capitalize } from '../../../lib/utils'

type Size = 'small' | 'medium' | 'large'
type Kind = 'plus' | 'minus' | 'close' | 'categories' | 'servers' | 'about'

type Props = {
  /** Kind of icon */
  kind: Kind,
  /** Size of icon */
  size?: Size,
  /** onClick handler */
  onClick?: () => mixed
}

const style = ({ theme, size }) => css`
  height: ${theme.iconSize[capitalize(size)]};
  width: ${theme.iconSize[capitalize(size)]};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: auto;
    width: 100%;
  }
`

const StyledIcon = styled.i`
  ${style}
`

const Icon = (props: Props) => {
  const { kind, ...others } = props
  return (
    <StyledIcon {...others}>
      <img src={`/icons/${kind}.svg`} />
    </StyledIcon>
  )
}

Icon.defaultProps = {
  size: 'medium',
  kind: 'plus'
}

export default Icon
