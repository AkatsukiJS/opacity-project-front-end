/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

const toggleActived = e => {
  e.currentTarget.classList.toggle('op__hamburguer--actived')
}

type Size = 'small' | 'medium' | 'large'

type Props = {
  /** onClick handler  */
  onClick?: (event: mixed) => mixed,
  /** Size of hamburguer */
  size?: Size,
  /** className */
  className?: string
}

const paddingSizes = {
  small: '0.15rem 0rem',
  medium: '0.2rem 0rem',
  large: '0.25rem 0rem'
}

const widthSizes = {
  small: '1.5rem',
  medium: '2rem',
  large: '2.5rem'
}

const style = ({ theme, size }) => css`
  width: ${widthSizes[size]};
  cursor: pointer;

  ul,
  li {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    transition: transform 0.1s;
    width: 100%;
    padding: ${paddingSizes[size]};
    background-color: ${theme.color.Crimson};
    border-radius: 8px;
  }
  li:nth-of-type(2) {
    margin: 0.25rem 0;
  }

  :hover {
    li {
      background-color: ${theme.color.LightCrimson};
    }
  }

  &.op__hamburguer--actived {
    li {
      width: 110%;
      :nth-of-type(1) {
        transform: translate3d(-0.1rem, 0.65rem, 0) rotate(45deg);
      }
      :nth-of-type(2) {
        transform: translate3d(-0.1rem, 0.02rem, 0) rotate(-45deg);
      }
      :nth-of-type(3) {
        transform: scale(0) translate3d(0rem, 0rem, 0) rotate(45deg);
      }
    }
  }
`
const StyledHamburguer = styled.div`
  ${style}
`

/** Button component */
const Hamburguer = (props: Props) => {
  const { className, onClick, size } = props

  return (
    <StyledHamburguer
      onClick={event => {
        toggleActived(event)
        onClick && onClick(event)
      }}
      className={className}
      size={size}
    >
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </StyledHamburguer>
  )
}

Hamburguer.defaultProps = {
  size: 'medium'
}

export default Hamburguer
