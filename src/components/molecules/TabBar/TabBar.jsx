/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Icon, Label } from '../../../components/'

type Kind = 'categories' | 'servers' | 'about'

type TIcon = 'categories' | 'servers' | 'about'

type Item = {
  label: string,
  icon: TIcon
}

type Props = {
  /** Callback to click action */
  onSelect: string => mixed,
  /** Selected tab now */
  selected: Kind,
  /** Tab items of tabbar */
  items: [Item],
  /** className */
  className?: string
}

const style = ({ theme }) => css`
  display: flex;

  .op__tabbar-item {
    cursor: pointer;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.LightGray};
    border: ${theme.borderSize.TabBar} solid ${theme.color.Gray};
    padding: 8px;

    &.op__tabbar-item--enable {
      background-color: ${theme.color.White};
      box-shadow: inset 0px -3px 0px ${theme.color.Crimson};
      border-width: 0px;
    }
  }
`

const StyledTabBar = styled.div`
  ${style}
`

const TabBar = (props: Props) => {
  const { selected, onSelect, items, className } = props

  return (
    <StyledTabBar className={className}>
      {items.map(item => {
        const isEnable = selected === item.icon
        return (
          <div
            key={item.icon}
            onClick={() => {
              onSelect(item.icon)
            }}
            className={`op__tabbar-item ${
              isEnable ? 'op__tabbar-item--enable' : ''
            }`}
          >
            <div>
              <Icon
                kind={item.icon}
                size={'medium'}
                color={isEnable ? 'Crimson' : 'DarkGray'}
              />
            </div>
            <div>
              <Label kind={isEnable ? 'primary' : 'grizzly'}>
                {item.label}
              </Label>
            </div>
          </div>
        )
      })}
    </StyledTabBar>
  )
}

TabBar.defaultProps = {}

export default TabBar
