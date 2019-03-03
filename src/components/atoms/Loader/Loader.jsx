/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx, keyframes } from '@emotion/core'

type Size = 'small' | 'medium' | 'large'

type Props = {
  /** Size of loader */
  size?: Size,
  /** className */
  className?: string,
  /** */
  label?: string
}

const loading = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 50%;
  }
  100% {
    background-position: 100%;
  }
`

const Sizes = {
  small: '1rem',
  medium: '2rem',
  large: '3rem'
}

const style = ({ theme, size, label }) => css`
  margin: 0;
  padding: 0;
  border: none;

  :before {
    width: 100%;
    margin: auto;
    color: ${theme.color.Black};
    line-height: ${Sizes[size]};
    font-size: 1rem;
    font-family: ${theme.fontFamily.Ropa};
    text-align: center;
    content: '${label}';
    display: block;
    height: ${Sizes[size]};
    border-radius: 0.5rem;
    background: linear-gradient(to right, ${theme.color.LightestGray}, ${
  theme.color.LightGray
}, ${theme.color.LightGray}, ${theme.color.LightestGray});
    background-size: 50%;
    background-repeat: repeat;
    padding: 0.25rem 0;
    animation: ${loading} 1s linear infinite;
  }
`

const StyledLoader = styled.div`
  ${style}
`

const Loader = (props: Props) => {
  const { size, label, className } = props
  return <StyledLoader className={className} size={size} label={label} />
}

Loader.defaultProps = {
  size: 'medium',
  label: 'Loading'
}

export default Loader
