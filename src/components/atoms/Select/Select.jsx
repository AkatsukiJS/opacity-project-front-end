/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

const toggleActive = function (event) {
  const select = event.currentTarget
  select.classList.toggle('op__select--active')
}

type Size = 'small' | 'medium' | 'large'

type Option = {
  label: string,
  value: string
}

type Props = {
  /** List of options */
  options?: Option[],
  /** onSelect handler  */
  onSelect: (value: string, key?: number) => mixed,
  /** Placeholder */
  placeholder?: string,
  /** Value of select */
  value: string,
  /** Size of select */
  size: Size,
  /** isBlock flag */
  isBlock?: boolean,
  /** className */
  className?: string
}

const capitalize = (str = '', n) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const style = ({ theme, size = 'medium', isBlock }) => css`
  font-family: ${theme.fontFamily.Ropa};
  font-size: ${theme.fontSize[capitalize(size)]};
  display: ${isBlock ? 'block' : 'inline-block'};

  .op__select-wrapper {
    padding: ${theme.selectSize[capitalize(size)]};
    border-radius: 4px;
    display: block;
    background-color: ${theme.color.LightestGray};
    border: 1px solid ${theme.color.LightGray};
    cursor: pointer;
    position: relative;
    :hover {
      background-color: ${theme.color.White};
    }
  }

  .op__select__placeholder-wrapper {
    color: ${theme.color.Crimson};
    display: flex;
    justify-content: space-between;
  }
  .op__select__placeholder-title {
    text-align: center;
    width: 100%;
  }

  .op__select-arrow {
    position: relative;
    content: '';
    top: 0.33rem;
    right: 0.25rem;
    width: 0;
    height: 0;
    border: 0.4rem solid transparent;
    border-color: ${theme.color.Crimson} transparent transparent transparent;
    margin-left: 1rem;
  }
  .op__select-options {
    display: none;
  }
  &.op__select--active .op__select-wrapper {
    background-color: ${theme.color.White};
  }
  &.op__select--active .op__select-wrapper .op__select-options {
    display: block;
    top: 100%;
    position: absolute;
    padding: 0;
    width: 100%;
    left: 0;
    border: 1px solid ${theme.color.LightGray};
    border-top: none;
    border-radius: 0 0 4px 4px;
    box-sizing: border-box;
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
    value,
    size,
    isBlock,
    className
  } = props

  const current = options.find(el => el.value === value)
  const selected = current ? current.label : placeholder

  const onSelectItem = (valueItem, key) => onSelect && onSelect(valueItem, key)

  return (
    <StyledSelect
      size={size}
      isBlock={isBlock}
      className={className}
      onClick={toggleActive}
    >
      <div className='op__select-wrapper'>
        <div className='op__select__placeholder-wrapper'>
          <div className='op__select__placeholder-title'>
            {' '}
            <span> {selected} </span>{' '}
          </div>
          <div className='op__select-arrow' />
        </div>
        <div className='op__select-options'>
          <ul>
            {options.map(({ value, label }, key) => (
              <li key={key} onClick={() => onSelectItem(value, key)}>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledSelect>
  )
}

Select.defaultProps = {
  options: [],
  size: 'medium',
  placeholder: 'Choose a option',
  isBlock: false
}

export default Select
