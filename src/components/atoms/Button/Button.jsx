/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Types = 'primary' | 'secondary'

type Props = {
  /** Type of button */
  type?: Types,
  /** Label  of button */
  children: string,
  /** onClick handler  */
  onClick?: () => mixed
}

const style = ({ theme, type }) => css`
  ${
  type === 'primary'
    ? `
    background-color: ${theme.color.White};
    color: ${theme.color.Crimson};
  `
    : `
    background-color: ${theme.color.LightCrimson};
    color: ${theme.color.White};
  `
}
  font-size: ${theme.fontSize.Medium};
  font-family: ${theme.fontFamily.Ropa};
  padding: 0.5rem 1.2rem;
  box-shadow: ${theme.boxShadow.Button};
  border-radius: ${theme.borderRadius.Medium};
  border: 0 solid transparent;
  cursor: pointer;
  :hover{
    ${
  type === 'primary'
    ? `
      background-color: ${theme.color.LightestGray};
    `
    : `
      background-color: ${theme.color.Crimson};
    `
}
  }

`
const StyledButton = styled.button`
  ${style}
`

/** Button component */
const Button = (props: Props) => <StyledButton {...props} />

Button.defaultProps = {
  type: 'primary'
}

export default Button
