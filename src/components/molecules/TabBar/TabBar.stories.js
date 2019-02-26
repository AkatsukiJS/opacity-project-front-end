import React from 'react'
import TabBar, { tabOptions } from './TabBar'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-TABBAR'
const selectedDefault = TabBar.defaultProps.selected

storiesOf('TabBar', module).add('example', () => {
  const selected = select('Selected', tabOptions, selectedDefault, group)
  return <TabBar onSelect={action(`onSelect:`)} selected={selected} />
})
