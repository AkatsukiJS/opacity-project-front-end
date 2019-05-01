import React from 'react'
import DialogBoxModal from './DialogBoxModal'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-DIALOG-MODAL'

storiesOf('Organisms', module).add('DialogBoxModal', () => {
  const title = text('title', 'I am a dialog modal', group)
  const confirmText = text('confirmText', 'confirm', group)
  const cancelText = text('cancelText', 'cancel', group)
  const isOpen = select('isOpen', [true, false], true)

  return (
    <DialogBoxModal
      isOpen={isOpen}
      title={title}
      confirmText={confirmText}
      cancelText={cancelText}
      onConfirm={action('onConfirm')}
      onClose={action('onClose')}
      onCancel={action('onCancel')}
    >
      <div> hello </div>
    </DialogBoxModal>
  )
})
