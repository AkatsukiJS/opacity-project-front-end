/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { capitalize } from '../../../lib/utils'
import ReactSVG from 'react-svg'

type Size = 'small' | 'medium' | 'large'
type Kind = 'plus' | 'minus' | 'close' | 'categories' | 'servers' | 'about'
type Colors =
  | 'LightCrimson'
  | 'Crimson'
  | 'DarkCrimson'
  | 'LightestGray'
  | 'LightGray'
  | 'Gray'
  | 'DarkGray'
  | 'Black'
  | 'White'

type Props = {
  /** Kind of icon */
  kind: Kind,
  /** Size of icon */
  size?: Size,
  /** onClick handler */
  onClick?: () => mixed,
  /** Color */
  color?: Colors
}

const style = ({ theme, size, color }) => css`
  height: ${theme.iconSize[capitalize(size)]};
  width: ${theme.iconSize[capitalize(size)]};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${theme.iconSize[capitalize(size)]};
    width: ${theme.iconSize[capitalize(size)]};
    * {
      fill: ${theme.color[color]};
    }
  }
`

const StyledIcon = styled.i`
  ${style}
`

const Icon = (props: Props) => {
  const { kind, ...others } = props
  return (
    <StyledIcon {...others}>
      <ReactSVG src={`/icons/${kind}.svg`} />
    </StyledIcon>
  )
}

Icon.defaultProps = {
  size: 'medium',
  kind: 'plus',
  color: 'Crimson'
}

export default Icon
