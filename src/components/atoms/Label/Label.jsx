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
  /** Line in label */
  hasLine?: boolean,
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
  padding-bottom: 5px;
  border-bottom: ${hasLine
    ? `1px solid ${theme.color[kindColor[kind]]}`
    : 'none'};
`

const StyledLabel = styled.span`
  ${style}
`

const Label = (props: Props) => <StyledLabel {...props} />

Label.defaultProps = {
  kind: 'basic',
  size: 'medium',
  children: 'label',
  hasLine: false
}

export default Label
