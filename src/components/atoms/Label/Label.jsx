/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { capitalize } from '../../../lib/utils'

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

const kindColor = {
  primary: 'Crimson',
  basic: 'Black',
  grizzly: 'DarkGray'
}

const style = ({ theme, size, kind, hasLine }) => css`
  font-family: ${theme.fontFamily.Ropa};
  font-size: ${theme.fontSize[capitalize(size)]};
  color: ${theme.color[kindColor[kind]]};
  font-weight: normal;
  border-bottom: none;
`

const StyledLabel = styled.span`
  ${style}
`

const Label = (props: Props) => <StyledLabel {...props} />

Label.defaultProps = {
  kind: 'basic',
  size: 'medium',
  children: 'label'
}

export default Label
