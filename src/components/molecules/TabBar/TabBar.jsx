/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import Icon from '../../atoms/Icon/Icon'

type Kind = 'categories' | 'servers' | 'about'

type Props = {
  /** Callback to click action */
  onSelect: string => mixed,
  /** Selected tab now */
  selected: Kind
}

const style = ({ theme }) => css`
  display: flex;

  div.item {
    cursor: pointer;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.LightGray};
    border: ${theme.borderSize.TabBar} solid ${theme.color.Gray};
    padding: 8px;

    &.enable {
      background-color: ${theme.color.White};
      box-shadow: inset 0px -3px 0px ${theme.color.Crimson};
      border-width: 0px;
    }
  }
`

const StyledTabBar = styled.div`
  ${style}
`

export const tabOptions = ['categories', 'servers', 'about']

const TabBar = (props: Props) => {
  const { selected, onSelect } = props
  const [activeTab, setActiveTab] = useState(selected)

  return (
    <StyledTabBar {...props}>
      {tabOptions.map(item => {
        const isEnable = activeTab === item
        return (
          <div
            key={item}
            onClick={() => {
              onSelect(item)
              setActiveTab(item)
            }}
            className={`item ${isEnable ? 'enable' : ''}`}
          >
            <Icon
              kind={item}
              size={'large'}
              color={isEnable ? 'Crimson' : 'DarkGray'}
            />
          </div>
        )
      })}
    </StyledTabBar>
  )
}

TabBar.defaultProps = {
  selected: 'categories'
}

export default TabBar
