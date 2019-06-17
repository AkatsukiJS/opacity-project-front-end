import React from 'react'
import Button from './Button'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-BUTTON'

const kindOptions = ['primary', 'secondary', 'invisible']
const kindDefault = 'primary'

const sizeOptions = ['small', 'medium', 'large']
const sizeDefault = 'medium'

const dropShadowOptions = [false, true]
const dropShadowDefault = false

storiesOf('Atoms', module).add('Button', () => {
  const kind = select('Kind', kindOptions, kindDefault, group)
  const label = text('Label', 'button', group)
  const size = select('Size', sizeOptions, sizeDefault, group)
  const hasDropShadow = select(
    'hasDropShadow',
    dropShadowOptions,
    dropShadowDefault,
    group
  )
  return (
    <Button
      kind={kind}
      size={size}
      hasDropShadow={hasDropShadow}
      onClick={action('Button clicked!')}
    >
      {label}
    </Button>
  )
})
