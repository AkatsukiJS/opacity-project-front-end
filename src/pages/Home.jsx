// @flow
/** @jsx jsx */

import { Label, Container } from '../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

const Home = ({ className }) => {
  return (
    <div className={className}>
      <Container className='op__home__container'>
        <div className='op__home__img op__home__logo'>
          <img
            alt='opacitiy-project logo'
            src={require('../../assets/logo.png')}
          />
        </div>

        <div className='op__home__about'>
          <p>
            Um mini-portal usando dados do "Portal da Transparência". Mais
            informações em{' '}
            <Link to='/about'>
              <Label kind='primary' size='large'>
                Sobre
              </Label>
            </Link>
            .
          </p>
          <p>
            <Link to='/categories'>
              <Label kind='primary' size='large'>
                Acesse as categorias
              </Label>
            </Link>
          </p>
        </div>

        <div className='op__home__akatsuki'>
          <a href='https://github.com/akatsukijs' target='_blank'>
            <img
              alt='akatsuki js logo'
              src={require('../../assets/footerlogo.png')}
            />
          </a>
        </div>
      </Container>
    </div>
  )
}

const HomeStyled = styled(Home)`
  .op__home__container {
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    a {
      color: ${({ theme }) => theme.color.Crimson};
    }
  }
  .op__home__img {
    margin: 10px auto;
    img {
      width: 300px;
    }
    display: inline-block;
  }
  .op__home__logo {
    margin: auto;
  }
  .op__home__akatsuki {
    width: 100%;
    text-align: center;
    border-radius: 8px;
    padding: 0.5rem 0;
    margin: 1rem 0;
    background-color: ${({ theme }) => theme.color.LightestGray};
    img {
      width: 200px;
    }
  }
  .op__home__about {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.Large};
  }
`

export default HomeStyled
