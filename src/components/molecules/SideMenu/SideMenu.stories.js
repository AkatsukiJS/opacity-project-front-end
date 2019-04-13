import React from 'react'
import SideMenu from './SideMenu'
import { storiesOf } from '@storybook/react'
import { object, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-SIDE-MENU'

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

const style = {
  position: 'relative',
  width: '100%',
  height: '400px',
  'background-color': 'gray'
}

const Root = ({ children }) => <div style={style}> {children} </div>

storiesOf('Molecules', module)
  .addDecorator(story => <Root>{story()}</Root>)
  .add('SideMenu', () => {
    const links = object('Links', linksDefault, group)
    const open = select('isOpen', [false, true], true, group)
    return (
      <SideMenu
        isOpen={open}
        links={links}
        onHamburguer={action('[SideMenu]: onHamburguer')}
        imageFooter={require('./footerlogo.png')}
      />
    )
  })
