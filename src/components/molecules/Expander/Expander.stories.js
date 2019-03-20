import React from 'react'
import Expander from './Expander'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-EXPANDER'

storiesOf('Molecules', module).add('Expander', () => {
  const title = text('title', 'Dados', group)
  const isExpanded = select('isExpanded', [false, true], true, group)

  return (
    <Expander
      title={title}
      isExpanded={isExpanded}
      onExpand={action('[expander]: onExpand')}
    >
      <div>Eusou um Node</div>
      <div>Eu sou outro Node</div>
    </Expander>
  )
})
