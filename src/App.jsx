// @flow
/** @jsx jsx */

import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { MainHeader } from './components'
import { Categories } from './pages'

type Props = {
  className: string
}

const linksList = [
  {
    label: 'Categorias',
    href: '#categories'
  },
  {
    label: 'Sobre',
    href: '#about'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AkatsukiJS'
  }
]

const App = ({ className }: Props) => (
  <div className={className}>
    <MainHeader
      links={linksList}
      logo={require('../assets/logo.png')}
      linkLogo='#'
      className='op__app__mainheader'
    />
    <Categories />
  </div>
)

const AppStyled = styled(App)`
  background-color: ${({ theme }) => theme.color.LightestGray};
  width: 480px;
  margin: auto;
  position: relative;

  .op__app__mainheader {
    position: relative;
  }
`
export default AppStyled
