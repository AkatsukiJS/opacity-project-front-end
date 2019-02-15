/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Props = {
  /** State of radio button */
  isSelected: boolean,
  /** onSelect handler  */
  onSelect: () => mixed
}

const style = ({ theme, type, isSelected }) => css`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  background: none;
  border: solid ${theme.borderSize.RadioButton};
  border-color: ${isSelected ? theme.color.Crimson : theme.color.DarkGray};
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${theme.color.LightestGray};
  }

  div {
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${theme.color.Crimson};
    border-radius: 50%;
  }
`

const StyledRadioButton = styled.div`
  ${style}
`

/** RadioButton component */
const RadioButton = (props: Props) => {
  const { isSelected, onSelect } = props

  return (
    <StyledRadioButton {...props} onClick={onSelect}>
      {isSelected ? <div /> : null}
    </StyledRadioButton>
  )
}

RadioButton.defaultProps = {
  isSelected: false
}

export default RadioButton
