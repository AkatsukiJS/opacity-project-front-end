import React from 'react'
import Nav from './Nav'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

const group = 'GROUP-NAV'

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
    href: '#cat',
    iconSrc: 'https://github.githubassets.com/favicon.ico'
  }
]

storiesOf('Molecules', module).add('Nav', () => {
  const links = object('Links', linksDefault, group)

  return <Nav links={links} />
})
