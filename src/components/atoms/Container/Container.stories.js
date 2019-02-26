import React from 'react'
import Container from './Container'
import { storiesOf } from '@storybook/react'
import { text, select, boolean, array } from '@storybook/addon-knobs'

const group = 'GROUP-CONTAINER'

const sizeOptions = ['small', 'medium', 'large']
const sizeDefault = 'medium'

const conerDefault = [0, 0, 0, 0]
const dropShadowDefault = true

const contentDefault = 'This is a container atom'

storiesOf('Atoms', module).add('Container', () => {
  const size = select('Size', sizeOptions, sizeDefault, group)
  const hasDropShadow = boolean('hasDropShadow', dropShadowDefault, group)
  const coner = array('Coner', conerDefault, ',', group)
  const content = text('Content', contentDefault, group)

  return (
    <Container
      hasDropShadow={hasDropShadow}
      size={size}
      coner={coner.map(x => Number(x))}
    >
      {content}
    </Container>
  )
})
