import theme from '../src/theme.js'
import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from 'emotion-theming'
import { configure, addDecorator, addParameters } from '@storybook/react'

import './index.css'

addDecorator(
  withInfo({
    inline: true,
    header: false,
    styles: {
      infoBody: {
        fontFamily: 'Ropa Sans',
        border: '1px solid #eee',
        padding: '20px 40px 40px'
      }
    }
  })
)

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

const req = require.context('../src/components', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withKnobs)

addParameters({
  options: {
    name: 'Opacity Project',
    url: 'https://github.com/AkatsukiJS/opacity-project-front-end'
  }
})

configure(loadStories, module)
