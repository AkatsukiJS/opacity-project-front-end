import React from 'react'
import Loader from './Loader'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

const group = 'GROUP-LOADER'

const sizeOptions = ['small', 'medium', 'large']
const sizeDefault = 'medium'

storiesOf('Atoms').add('Loader', () => {
  const size = select('size', sizeOptions, sizeDefault, group)
  const label = text('label', 'Loading', group)

  return <Loader size={size} label={label} />
})
