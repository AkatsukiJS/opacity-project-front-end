import React from 'react'
import ModalOverlay from './ModalOverlay'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

const group = 'GROUP-MODAL'

storiesOf('Atoms').add('ModalOverlay', () => {
  const open = select('isOpen', [false, true], true, group)
  return <ModalOverlay isOpen={open} />
})
