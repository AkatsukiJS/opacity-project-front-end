import React from 'react'
import TabBar from './TabBar'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-TABBAR'
const selectedDefault = 'categories'
const items = [
  {
    label: 'Categorias',
    icon: 'categories'
  },
  {
    label: 'Servidores',
    icon: 'servers'
  },
  {
    label: 'Sobre',
    icon: 'about'
  }
]

const tabOptions = ['categories', 'servers', 'about']

storiesOf('Molecules', module).add('TabBar', () => {
  const selected = select('Selected', tabOptions, selectedDefault, group)
  return (
    <TabBar onSelect={action(`onSelect:`)} selected={selected} items={items} />
  )
})
