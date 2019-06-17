import React from 'react'
import Select from './Select'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-SELECT'

const sizeOptions = ['small', 'medium', 'large']
const sizeDefault = 'medium'

const optionsDefault = [
  {
    label: 'man',
    value: 'man'
  },
  {
    label: 'child',
    value: 'child'
  },
  {
    label: 'bear',
    value: 'bear'
  }
]

const placeholderDefault = 'Choose a option'

const values = [null, ...optionsDefault.map(({ value }) => value)]

storiesOf('Atoms', module).add('Select', () => {
  const isBlock = select('isBlock', [false, true], false, group)
  const size = select('Size', sizeOptions, sizeDefault, group)
  const options = object('Options', optionsDefault, group)
  const placeholder = text('Placeholder', placeholderDefault, group)
  const value = select('Value', values, null, group)

  return (
    <Select
      isBlock={isBlock}
      options={options}
      placeholder={placeholder}
      onSelect={action(`onSelect: `)}
      value={value}
      size={size}
    />
  )
})
