/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Label, RadioButton, RadioButtonLabeled } from '../../../components'

type Direction = 'row' | 'column'
type Justify = 'flex-start' | 'flex-end' | 'space-between'

type Props = {
  /** the selected option */
  selected: string,
  /** onSelect handler */
  onSelect: (selected: string) => mixed,
  /** options */
  options: string[],
  /** isKindLabeled flag */
  isKindLabeled?: boolean,
  /** direction of options */
  direction?: Direction,
  /** Justify content option */
  justifyContent?: Justify,
  /** className */
  className?: string
}

const style = ({
  theme,
  direction = 'row',
  justifyContent = 'flex-start'
}) => css`
  display: flex;
  flex-direction: ${direction};
  flex-wrap: wrap;
  justify-content: ${justifyContent};
  align-item: center;
  .op__radio-group-item {
    display: flex;
    align-items: center;
    .op__radio-group-item-label {
      margin: 0 0 0 0.25rem;
      padding: 0;
    }
  }
  ${direction === 'row'
    ? `
      .op__radio-group-item{
        margin: 0.25rem 0.5rem 0.25rem 0;
        :first-of-type{ margin-left: 0;}
        :last-of-type{ margin-right: 0;}
      }
    `
    : `
      .op__radio-group-item{
        margin: 0.5rem 0 0 0;
        :first-of-type{ margin-top: 0;}
        :last-of-type{ margin-bottom: 0;}
      }

    `}
`
const StyledRadioGroup = styled.div`
  ${style}
`

/** RadioGroup component */
const RadioGroup = (props: Props) => {
  const {
    selected,
    onSelect,
    options = [],
    isKindLabeled = false,
    direction,
    className,
    justifyContent
  } = props

  const Radio = isKindLabeled ? RadioButtonLabeled : RadioButton

  return (
    <StyledRadioGroup
      className={className}
      direction={direction}
      justifyContent={justifyContent}
    >
      {options.map((label, key) => {
        const isActived = selected === label
        return (
          <div className='op__radio-group-item' key={key}>
            <Radio onSelect={() => onSelect(label)} isSelected={isActived}>
              {isKindLabeled ? label : ''}
            </Radio>
            {!isKindLabeled ? (
              <Label
                kind={isActived ? 'primary' : 'grizzly'}
                className='op__radio-group-item-label'
              >
                {label}
              </Label>
            ) : null}
          </div>
        )
      })}
    </StyledRadioGroup>
  )
}

RadioGroup.defaultProps = {
  isKindLabeled: false,
  direction: 'row',
  className: '',
  justifyContent: 'flex-start'
}

export default RadioGroup
