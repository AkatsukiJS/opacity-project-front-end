import React from 'react'
import DialogBox from './DialogBox'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-DIALOG-BOX'

storiesOf('Molecules', module).add('DialogBox', () => {
  const title = text('Title', 'Dialog', group)
  const confirmText = text('Confirm Text', 'Confirm', group)
  const cancelText = text('Cancel Text', 'Cancel', group)

  return (
    <DialogBox
      title={title}
      cancelText={cancelText}
      confirmText={confirmText}
      onCancel={action('[dialog-box]: Cancel')}
      onConfirm={action('[dialog-box]: Confirm')}
      onClose={action('[dialog-box]: Close')}
    >
      <div>Eu sou um Node</div>
    </DialogBox>
  )
})
