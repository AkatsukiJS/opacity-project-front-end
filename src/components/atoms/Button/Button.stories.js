import React from 'react'
import Button from './Button'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const options = ['primary', 'secondary']
const defaultValue = 'primary'
const group = 'GROUP-BUTTON'

storiesOf('Button', module)
  .add('Primary', () => {
    const type = select('Type', options, defaultValue, group)
    const label = text('Label', 'button', group)

    return (
      <Button type={type} onClick={action('Button clicked!')}>
        {label}
      </Button>
    )
  })
  .add('Secondary', () => <Button type='secondary'> Secondary </Button>)
