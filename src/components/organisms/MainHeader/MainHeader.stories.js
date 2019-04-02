import React from 'react'
import MainHeader from './MainHeader'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

const group = 'GROUP-MAIN-HEADER'

storiesOf('Organisms', module).add('MainHeader', () => {
  const logo = require('./logo.png')
  const link = text('linkLogo', 'https://link.foo', group)
  return (
    <MainHeader
      logo={logo}
      onHamburguer={action('[MainHeader]: onHamburguer')}
      linkLogo={link}
    />
  )
})
