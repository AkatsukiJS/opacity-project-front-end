/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Kind = 'primary' | 'basic' | 'grizzly'
type Size = 'small' | 'medium' | 'large'

type Props = {
  /** Type of label */
  kind?: Kind,
  /** Size of label */
  size?: Size,
  /** Text of label */
  children?: string
}

const style = () => css``

const StyledLabel = styled.span`
  ${style}
`

const Label = (props: Props) => <StyledLabel {...props} />

Label.defaultProps = {
  kind: 'primary',
  size: 'medium',
  children: 'label'
}

export default Label
