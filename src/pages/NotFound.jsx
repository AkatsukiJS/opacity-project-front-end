// @flow
/** @jsx jsx */

import { Label, Container } from '../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

const NotFound = ({ className }) => {
  return (
    <div className={className}>
      <Container className='op__notfound__container'>
        <div className='op__notfound__img'>
          <img src={require('../../assets/logo.png')} />
        </div>
        <div className='op__notfound__content'>
          <h1>Página não encontrada! &#128533;</h1>
          <div>
            {[
              ['/', 'Inicio'],
              ['/about', 'Sobre'],
              ['/categories', 'Categorias']
            ].map((el, key) => (
              <p>
                <Link key={key} to={el[0]}>
                  <Label size='large' kind='primary'>
                    {el[1]}
                  </Label>
                </Link>
              </p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

const NotFoundStyled = styled(NotFound)`
  .op__notfound__container {
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    img {
      width: 200px;
    }
  }
  .op__notfound__content {
    text-align: center;
    margin: auto;
    a {
      color: ${({ theme }) => theme.color.Crimson};
    }
    p {
      display: inline;
      margin: 0 1rem;
    }
  }
`

export default NotFoundStyled
