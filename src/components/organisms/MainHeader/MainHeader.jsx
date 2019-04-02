/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Container, Hamburguer } from '../../../components'

type Props = {
  /** Logo path */
  logo: string,
  /** Link logo */
  linkLogo: string,
  /** onHamburguer handler */
  onHamburguer: () => mixed,
  /** className */
  className?: string
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
  const { logo, onHamburguer, className, linkLogo } = props
  return (
    <StyledMainHeader className={className}>
      <Container size='small' className='op__mainheader-container'>
        <div className='op__mainheader-image'>
          <a href={linkLogo}>
            <img src={logo} />
          </a>
        </div>
        <Hamburguer onClick={onHamburguer} />
      </Container>
    </StyledMainHeader>
  )
}

MainHeader.defaultProps = {}

export default MainHeader
