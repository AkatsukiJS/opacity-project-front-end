/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Props = {
  /** State of radio button labeled */
  isSelected: boolean,
  /** Label  of radio button labeled */
  children: string,
  /** onSelect handler  */
  onSelect: () => mixed
}

const style = ({ theme, type, isSelected }) => css`
  background-color: ${theme.color.White};
  color: ${isSelected ? theme.color.Crimson : theme.color.DarkGray};
  font-size: ${theme.fontSize.Medium};
  font-family: ${theme.fontFamily.Ropa};
  padding: 0.5rem 1.2rem;
  border-radius: ${theme.borderRadius.Medium};
  border: 1px solid ${isSelected ? theme.color.Crimson : theme.color.DarkGray};
  cursor: pointer;
  :hover {
    background-color: ${theme.color.LightestGray};
  }
`
const StyledRadioButtonLabeled = styled.button`
  ${style}
`

/** ReactButtonLabeled component */
const RadioButtonLabeled = (props: Props) => {
  const { isSelected, onSelect, children } = props

  return (
    <StyledRadioButtonLabeled isSelected={isSelected} onClick={onSelect}>
      {children}
    </StyledRadioButtonLabeled>
  )
}

RadioButtonLabeled.defaultProps = {
  isSelected: true,
  /** Label  of radio button labeled */
  children: 'Radio Button Labeled'
}

export default RadioButtonLabeled
