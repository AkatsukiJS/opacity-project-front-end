/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Size = 'small' | 'medium' | 'large'

type Props = {
  /** Url of icon image */
  src: string,
  /** Size of icon */
  size?: Size
}

const style = () => css``

const StyledIcon = styled.i`
  ${style}
`

const Icon = (props: Props) => <StyledIcon {...props} />

Icon.defaultProps = {
  kind: 'medium',
  src:
    'https://trello-attachments.s3.amazonaws.com/5b8dc7bb2b0fa353b5746a33/5c55a5a186fbfd47afbd76b1/1005da371d3d527551367bcf617c250e/x.png'
}

export default Icon
