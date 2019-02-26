import React from 'react'
import Label from './Label'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

const group = 'GROUP-LABEL'

const kindOptions = ['primary', 'basic', 'grizzly']
const kindDefault = 'basic'

const sizeOptions = ['small', 'medium', 'large']
const sizeDefault = 'medium'

const defaultLabel = 'this is a label atom'

const hasLineDefault = false

storiesOf('Label', module).add('default', () => {
  const kind = select('Kind', kindOptions, kindDefault, group)
  const label = text('Label', defaultLabel, group)
  const size = select('Size', sizeOptions, sizeDefault, group)
  const hasLine = boolean('HasLine', hasLineDefault, group)

  return (
    <Label kind={kind} size={size} hasLine={hasLine}>
      {label}
    </Label>
  )
})
