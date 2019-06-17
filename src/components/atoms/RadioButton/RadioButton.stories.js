import React from 'react'
import RadioButton from './RadioButton'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-RADIO-BUTTON'
const defaultValue = false
const options = [true, false]

storiesOf('Atoms', module).add('RadioButton', () => {
  const state = select('State', options, defaultValue, group)

  return (
    <RadioButton
      isSelected={state}
      onSelect={action('Radio Button selected!')}
    />
  )
})
