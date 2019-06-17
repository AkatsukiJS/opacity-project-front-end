// @flow
/** @jsx jsx */

import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { MainHeader, Label } from './components'
import { Categories, Category, About, Home, NotFound } from './pages'
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

const PageRouter = () => {
  return (
    <div>
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
      <Switch>
        <Route path='/categories' component={Categories} />
        <Route path='/category' component={Category} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  )
}

const App = ({ className }: Props) => (
  <div className={className}>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/(about|categories|category)' component={PageRouter} />
        <Route component={NotFound} />
      </Switch>
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
