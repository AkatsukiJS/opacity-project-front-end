import React from 'react'
import ActionsBar from './ActionsBar'
import { storiesOf } from '@storybook/react'
import { object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-ACTIONS-BAR'

const actionsOptions = [
  {
    name: 'Filtrar',
    onClick: action('Filtrar')
  },
  {
    name: 'Ordenar',
    onClick: action('Ordenar')
  }
]

const justifyContentOptions = ['space-between', 'flex-start', 'flex-end']

storiesOf('Molecules', module).add('ActionsBar', () => {
  const actions = object('action', actionsOptions, group)
  const justifyContent = select(
    'justifyContent',
    justifyContentOptions,
    'space-between',
    group
  )

  return <ActionsBar actions={actions} justifyContent={justifyContent} />
})
