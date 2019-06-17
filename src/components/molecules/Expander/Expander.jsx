/* @flow */
/** @jsx jsx */
import type { Node } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Label, Icon } from '../../../components'

type Props = {
  /** Title */
  title: string,
  /** Node Html to expand */
  children: Node,
  /** onExpand handler */
  onExpand: () => mixed,
  /** Flag to expand */
  isExpanded: boolean,
  /** className */
  className?: string
}

const style = ({ theme }) => css`
  display: block;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;
  margin: 0;
  border: none;
  transition: all 1s ease;
  background-color: ${theme.color.LightestGray};
  border-radius: 4px;
  font-family: ${theme.fontFamily.Ropa};

  :hover {
    cursor: pointer;
  }

  .op__expander-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      padding: 0;
    }
  }

  .op__expander-icon {
    cursor: pointer;
  }

  .op__expander-child {
    padding: 0.25rem 0 0.5rem;
    box-sizing: border-box;
    :before {
      padding: 0;
      margin: 0.25rem 0 0.75rem;
      content: '';
      display: block;
      background-color: ${theme.color.LightGray};
      height: 2px;
      width: 100%;
    }
  }
`
const StyledExpander = styled.div`
  ${style}
`

/** Expander component */
const Expander = (props: Props) => {
  const { children, title, isExpanded, onExpand, className } = props

  return (
    <StyledExpander className={className} onClick={onExpand}>
      <div className='op__expander-title'>
        <Label kind='basic'>{title}</Label>
        <div className='op__expander-icon'>
          <Icon size='small' kind={isExpanded ? 'minus' : 'plus'} />
        </div>
      </div>
      {isExpanded && <div className='op__expander-child'>{children}</div>}
    </StyledExpander>
  )
}

Expander.defaultProps = {}

export default Expander
