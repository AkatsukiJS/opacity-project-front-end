/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { capitalize } from '../../../lib/utils'

type Size = 'small' | 'medium' | 'large'

type Props = {
  /** Url of icon image */
  src: string,
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
  const { src, ...others } = props
  return (
    <StyledIcon {...others}>
      <img src={src} />
    </StyledIcon>
  )
}

Icon.defaultProps = {
  kind: 'medium',
  src:
    'https://trello-attachments.s3.amazonaws.com/5b8dc7bb2b0fa353b5746a33/5c55a5a186fbfd47afbd76b1/1005da371d3d527551367bcf617c250e/x.png'
}

export default Icon
