/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

const toggleActive = function (event) {
  const select = event.currentTarget
  select.classList.toggle('op_select-active')
}

type Size = 'small' | 'medium' | 'large'

type Option = {
  label: string,
  value: string
}

type Props = {
  /** List of options */
  options?: [Option],
  /** onSelect handler  */
  onSelect: (value: string) => mixed,
  /** Placeholder */
  placeholder?: string,
  /** Value of select */
  value: string,
  /** Size of select */
  size: Size
}

const capitalize = (str = '', n) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const style = ({ theme, size = 'medium' }) => css`
  font-family: ${theme.fontFamily.Ropa};
  padding: ${theme.selectSize[capitalize(size)]};
  font-size: ${theme.fontSize[capitalize(size)]};
  /*padding: 0.5rem;*/
  border-radius: 4px;
  display: inline-block;
  background-color: ${theme.color.LightestGray};
  border: 1px solid ${theme.color.LightGray};
  cursor: pointer;
  position: relative;
  :hover {
    background-color: ${theme.color.White};
  }

  span.op_select-placeholder {
    color: ${theme.color.Crimson};
  }
  span.op_select-placeholder::after {
    position: relative;
    content: '';
    top: 0.75rem;
    right: 0.25rem;
    width: 0;
    height: 0;
    border: 0.4rem solid transparent;
    border-color: ${theme.color.Crimson} transparent transparent transparent;
    margin-left: 1rem;
  }
  div.op_select-options {
    display: none;
  }
  &.op_select-active {
    background-color: ${theme.color.White};
  }
  &.op_select-active div.op_select-options {
    display: block;
    top: 100%;
    position: absolute;
    padding: 0;
    width: 100%;
    max-width: 300px;
    left: 0;
    border: 1px solid ${theme.color.LightGray};
    border-top: none;
    border-radius: 0 0 4px 4px;
    background-clip: padding-box;
    overflow-y: auto;
    max-height: 10rem;

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      color: ${theme.color.Crimson};

      li {
        padding: 0.5rem;
        background-color: ${theme.color.LightestGray};

        :hover {
          background-color: ${theme.color.White};
        }
      }
    }
  }
`

const StyledSelect = styled.div`
  ${style}
`

/** Select component */
const Select = (props: Props) => {
  const {
    options = [],
    placeholder = 'Choose a option',
    onSelect,
    value
  } = props

  const current = options.find(el => el.value === value)
  const selected = current ? current.label : placeholder

  const onSelectItem = valueItem => onSelect && onSelect(valueItem)

  return (
    <StyledSelect {...props} onClick={toggleActive}>
      <span class='op_select-placeholder'>{selected}</span>
      <div class='op_select-options'>
        <ul>
          {options.map(({ value, label }, key) => (
            <li key={key} onClick={() => onSelectItem(value)}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </StyledSelect>
  )
}

Select.defaultProps = {
  options: [],
  size: 'medium',
  placeholder: 'Choose a option'
}

export default Select
