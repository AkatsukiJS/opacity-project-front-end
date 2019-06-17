/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Container, Label } from '../../index.js'

type Justify = 'space-between' | 'flex-start' | 'flex-end'

type Action = {
  name: string,
  onClick: () => mixed
}

type Props = {
  /** Justify Content  */
  justifyContent?: Justify,
  /** List of actions */
  actions?: Action[],
  /** className */
  className?: string
}

const style = ({ theme, justifyContent = 'space-between' }) => css`
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    height: 1rem;
    justify-content: ${justifyContent};
    font-size: 1rem;
    list-style: none;
  }
  li {
    padding: 0;
    margin: 0 1rem;
    line-height: 1rem;
    display: inline-block;

    :after {
      width: 100%;
      height: 2px;
      border-radius: 2px;
      margin: 2px 0 0 0;
      background-color: ${theme.color.LightestGray};
      display: block;
      content: '';
    }

    :hover {
      cursor: pointer;
      :after {
        background-color: ${theme.color.Crimson};
      }
    }

    :first-of-type {
      margin-left: 0rem;
    }

    :last-of-type {
      margin-right: 0rem;
    }
  }
`

const StyledActionsBar = styled.div`
  ${style}
`

/** ActionsBar component */
const ActionsBar = (props: Props) => {
  const { actions = [], justifyContent = 'space-between', className } = props

  return (
    <StyledActionsBar className={className} justifyContent={justifyContent}>
      <Container size='small'>
        <ul>
          {actions.map(({ name, onClick }, key) => (
            <li onClick={onClick} key={key}>
              <Label kind='primary'>{name}</Label>
            </li>
          ))}
        </ul>
      </Container>
    </StyledActionsBar>
  )
}

ActionsBar.defaultProps = {
  actions: [],
  justifyContent: 'space-between',
  className: ''
}

export default ActionsBar
