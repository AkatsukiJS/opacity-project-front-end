import React from 'react'
import Icon from './Icon'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-ICON'

const sizeOptions = ['small', 'medium', 'large']
const sizeDefault = 'medium'

const kindOptions = ['plus', 'minus', 'close', 'categories', 'servers', 'about']
const kindDefault = 'plus'

const colorOptions = [
  'LightCrimson',
  'Crimson',
  'DarkCrimson',
  'LightestGray',
  'LightGray',
  'Gray',
  'DarkGray',
  'Black',
  'White'
]
const colorDefault = Icon.defaultProps.color

storiesOf('Atoms').add('Icon', () => {
  const size = select('Size', sizeOptions, sizeDefault, group)
  const kind = select('Kind', kindOptions, kindDefault, group)
  const color = select('Color', colorOptions, colorDefault, group)

  return (
    <Icon
      kind={kind}
      size={size}
      color={color}
      onClick={action('Icon clicked')}
    />
  )
})
