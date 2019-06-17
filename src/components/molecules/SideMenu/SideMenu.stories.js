import React from 'react'
import SideMenu from './SideMenu'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
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
    const open = select('isOpen', [false, true], true, group)
    return (
      <SideMenu
        isOpen={open}
        onHamburguer={action('[SideMenu]: onHamburguer')}
        imageFooter={require('./footerlogo.png')}
        onClickItem={action('[SideMenu]: onClickItem')}
      >
        {linksDefault.map((el, key) => (
          <a href={el.href} key={key}>
            {el.label}
          </a>
        ))}
      </SideMenu>
    )
  })
