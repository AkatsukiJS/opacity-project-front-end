import React from 'react'
import RadioButtonLabeled from './RadioButtonLabeled'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-RADIO-BUTTON-LABELED'
const defaultValue = false
const options = [true, false]

storiesOf('Atoms', module).add('RadioButtonLabeled', () => {
  const state = select('State', options, defaultValue, group)
  const label = text('Label', 'Radio button', group)

  return (
    <RadioButtonLabeled
      isSelected={state}
      onSelect={action('Radio Button Labeled selected!')}
    >
      {label}
    </RadioButtonLabeled>
  )
})
