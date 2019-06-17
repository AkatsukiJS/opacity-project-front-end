import React from 'react'
import Hamburguer from './Hamburguer'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-HAMBURGUER'

const sizeOptions = ['small', 'medium', 'large']
const sizeDefault = 'medium'

storiesOf('Atoms', module).add('Hamburguer', () => {
  const size = select('Size', sizeOptions, sizeDefault, group)

  return <Hamburguer size={size} onClick={action('[Hamburguer]: clicked!')} />
})
