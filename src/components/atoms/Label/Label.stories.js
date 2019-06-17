import React from 'react'
import Label from './Label'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

const group = 'GROUP-LABEL'

const kindOptions = ['primary', 'basic', 'grizzly']
const kindDefault = 'basic'

const sizeOptions = ['small', 'medium', 'large']
const sizeDefault = 'medium'

const defaultLabel = 'this is a label atom'

storiesOf('Atoms', module).add('Label', () => {
  const kind = select('Kind', kindOptions, kindDefault, group)
  const label = text('Label', defaultLabel, group)
  const size = select('Size', sizeOptions, sizeDefault, group)

  return (
    <Label kind={kind} size={size}>
      {label}
    </Label>
  )
})
