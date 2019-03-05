/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { capitalize } from '../../../lib/utils'

type Size = 'small' | 'medium' | 'large'
type Kind = 'plus' | 'minus' | 'close' | 'categories' | 'servers' | 'about'
type Color =
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
  /** className */
  className?: string,
  /** color of icon */
  color?: Color
}

const icons = {
  plus: '\\e903',
  minus: '\\e905',
  close: '\\e901',
  categories: '\\e902',
  servers: '\\e900',
  about: '\\e904'
}

const style = ({ theme, size, color, kind }) => css`
  @font-face {
    font-family: 'icomoon';
    src:  url(${require('./fonts/icomoon.eot')});
    src:  url(${require('./fonts/icomoon.eot')}) format('embedded-opentype'),
      url(${require('./fonts/icomoon.ttf')}) format('truetype'),
      url(${require('./fonts/icomoon.woff')}) format('woff'),
      url(${require('./fonts/icomoon.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'icomoon';
  font-size: ${theme.iconSize[capitalize(size)]};
  :before{
    content: '${icons[kind]}';
    color: ${theme.color[color]};
  }
`

const StyledIcon = styled.span`
  ${style}
`

const Icon = (props: Props) => {
  const { kind, className, onClick, color, size } = props
  return (
    <StyledIcon
      className={className}
      onClick={onClick}
      color={color}
      size={size}
      kind={kind}
    />
  )
}

Icon.defaultProps = {
  size: 'medium',
  kind: 'plus',
  color: 'Crimson'
}

export default Icon
