import React from 'react'
import MainHeader from './MainHeader'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

const group = 'GROUP-MAIN-HEADER'

const linksDefault = [
  {
    label: 'man',
    href: '#man'
  },
  {
    label: 'child',
    href: '#child'
  },
  {
    label: 'cat',
    href: '#cat'
  }
]

storiesOf('Organisms', module).add('MainHeader', () => {
  const logo = require('./logo.png')
  const link = text('linkLogo', 'https://link.foo', group)
  const linksList = object('links', linksDefault, group)
  return <MainHeader links={linksList} logo={logo} linkLogo={link} />
})
