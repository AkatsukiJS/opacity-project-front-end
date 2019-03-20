import React from 'react'
import RadioGroup from './RadioGroup'
import { storiesOf } from '@storybook/react'
import { select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-RADIO-GROUP'

const optionsList = ['bear', 'dog', 'child', 'woman', 'man', 'hamster']

const justifyOptions = ['flex-start', 'flex-end', 'space-between']

storiesOf('Molecules', module).add('RadioGroup', () => {
  const selected = select('selected', [null, ...optionsList], null, group)
  const isKindLabeled = select('isKindLabeled', [false, true], false, group)
  const options = object('options', optionsList, group)
  const direction = select('direction', ['row', 'column'], 'row', group)
  const justify = select('justifyContent', justifyOptions, 'flex-start', group)

  return (
    <RadioGroup
      selected={selected}
      isKindLabeled={isKindLabeled}
      options={options}
      direction={direction}
      onSelect={action('[RadioGroup]: onSelect')}
      justifyContent={justify}
    />
  )
})
