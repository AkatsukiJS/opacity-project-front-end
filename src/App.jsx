// @flow
/** @jsx jsx */

import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { MainHeader, Label } from './components'
import { Categories, Category, About } from './pages'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

type Props = {
  className: string
}

const linksList = [
  {
    label: 'Categorias',
    href: '/categories'
  },
  {
    label: 'Sobre',
    href: '/about'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AkatsukiJS'
  }
]

const Home = () => (
  <div>
    <Label> Hello Friend </Label>
  </div>
)

const PageRouter = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/categories' component={Categories} />
      <Route path='/category' component={Category} />
      <Route path='/about' component={About} />
    </Switch>
  )
}

const App = ({ className }: Props) => (
  <div className={className}>
    <Router>
      <MainHeader
        logo={require('../assets/logo.png')}
        linkLogo='#'
        className='op__app__mainheader'
      >
        {linksList.map((el, key) =>
          /^http/.test(el.href) ? (
            <a href={el.href} key={key} target='_blank'>
              <Label size='large'>{el.label}</Label>
            </a>
          ) : (
            <Link to={el.href} key={key}>
              <Label size='large'>{el.label}</Label>
            </Link>
          )
        )}
      </MainHeader>
      <PageRouter />
    </Router>
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

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
export default AppStyled
