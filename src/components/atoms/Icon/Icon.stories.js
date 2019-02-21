import React from 'react'
import Icon from './Icon'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-ICON'

const sizeOptions = ['small', 'medium', 'large']
const sizeDefault = 'medium'

const defaultSrc =
  'https://trello-attachments.s3.amazonaws.com/5b8dc7bb2b0fa353b5746a33/5c55a5a186fbfd47afbd76b1/1005da371d3d527551367bcf617c250e/x.png'

storiesOf('Icon').add('default', () => {
  const src = text('Src', defaultSrc, group)
  const size = select('Size', sizeOptions, sizeDefault, group)

  return <Icon src={src} size={size} onClick={action('Icon clicked')} />
})
