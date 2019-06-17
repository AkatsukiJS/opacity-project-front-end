/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Props = {
  /** isOpen flag */
  isOpen?: boolean,
  /** className */
  className?: string
}

const style = ({ theme }) => css`
  margin: 0;
  padding: 0;
  border: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${theme.color.Modal};
  z-index: 10;
`

const StyledModalOverlay = styled.div`
  ${style}
`

const ModalOverlay = (props: Props) => {
  const { isOpen = false, className } = props
  return isOpen ? <StyledModalOverlay className={className} /> : null
}

ModalOverlay.defaultProps = {
  isOpen: false
}

export default ModalOverlay
