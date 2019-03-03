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
    opacity: 1;
    width: 25%;
  }
  50% {
    width: 90%;
    opacity: 0.8;
  }
  100% {
    width: 25%;
    opacity: 1;
  }
`

const Sizes = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem'
}

const style = ({ theme, size, label }) => css`
  margin: 0;
  padding: 0;
  border: none;

  :before {
    margin: auto;
    color: ${theme.color.Black};
    font-size: 1rem;
    font-family: ${theme.fontFamily.Ropa};
    text-align: center;
    content: '${label}';
    display: block;
    height: ${Sizes[size]};
    border-radius: 0.5rem;
    background-color: ${theme.color.LightestGray};
    padding: 0.25rem 0;
    animation: ${loading} 2.5s ease-in-out infinite;
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
