/* @flow */
/** @jsx jsx */
import type { Node } from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import {
  Container,
  Hamburguer,
  ModalOverlay,
  SideMenu
} from '../../../components'

type Props = {
  /** Logo path */
  logo: string,
  /** Link logo */
  linkLogo: string,
  /** className */
  className?: string,
  /** List of nav links */
  children: Node[]
}

const style = ({ theme }) => css`
  display: block;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;

  .op__mainheader-container {
    display: flex;
    justify-content: space-between;

    .op__mainheader-hamburguer {
      z-index: 1000;
    }
  }
  .op__mainheader-image {
    width: 100%;
    margin: 0 auto;
    text-align: center;

    img {
      width: 100px;
    }
  }
`

const StyledMainHeader = styled.div`
  ${style}
`

/** MainHeader component */
const MainHeader = (props: Props) => {
  const { logo, className, linkLogo, children } = props
  const [isOpenMenu, setOpenMenu] = useState(false)
  return (
    <StyledMainHeader className={className}>
      <Container size='small' className='op__mainheader-container'>
        <div className='op__mainheader-image'>
          <a href={linkLogo}>
            <img src={logo} />
          </a>
        </div>
        <Hamburguer
          className='op__mainheader-hamburguer'
          onClick={() => setOpenMenu(!isOpenMenu)}
        />
      </Container>
      <ModalOverlay isOpen={isOpenMenu} />
      <SideMenu isOpen={isOpenMenu} onHamburguer={() => setOpenMenu(false)}>
        {children}
      </SideMenu>
    </StyledMainHeader>
  )
}

MainHeader.defaultProps = {}

export default MainHeader
