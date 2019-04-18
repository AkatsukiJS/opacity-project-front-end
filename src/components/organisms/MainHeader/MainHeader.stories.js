import React from 'react'
import MainHeader from './MainHeader'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

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

  return (
    <MainHeader logo={logo} linkLogo={link}>
      {linksDefault.map((el, key) => (
        <a href={el.href}>{el.label}</a>
      ))}
    </MainHeader>
  )
})
