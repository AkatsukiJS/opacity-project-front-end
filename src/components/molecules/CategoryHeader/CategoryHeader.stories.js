import React from 'react'
import CategoryHeader from './CategoryHeader'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

const group = 'GROUP-CATEGORY-HEADER'

const dropShadowDefault = true
const titleDefault = CategoryHeader.defaultProps.title
const subtitleDefault = CategoryHeader.defaultProps.subtitle

const hasLineDefault = false

storiesOf('Molecules', module).add('CategoryHeader', () => {
  const hasDropShadow = boolean('hasDropShadow', dropShadowDefault, group)
  const title = text('Title', titleDefault, group)
  const subtitle = text('Subtitle', subtitleDefault, group)
  const hasLine = boolean('HasLine', hasLineDefault, group)

  return (
    <CategoryHeader
      title={title}
      subtitle={subtitle}
      hasLine={hasLine}
      hasDropShadow={hasDropShadow}
    />
  )
})
