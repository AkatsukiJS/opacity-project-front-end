// @flow
/** @jsx jsx */

import { Label, Container } from '../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

const About = ({ className }) => {
  return (
    <div className={className}>
      <Container hasDropShadow={false}>
        <h1 className='op__about__title'>SOBRE</h1>
      </Container>
      <Container className='op__about__container' hasDropShadow={false}>
        <div>
          <Label size='large'>
            Front-end para a API de dados dos servidores públicos do "Portal da
            Transparência". A API é um exemplo de Web-Service que foi feita a
            extração e filtro de alguns dados das planilhas disponíveis no
            "Portal da Transparência". Para fins didáticos e simplicidade, foram
            filtrados apenas os servidores da UFPI (Poderia ser outra IEF).
          </Label>
          <p>
            <Label size='large'>
              O projeto é open-source, você pode conferir os detalhes da API e
              do Frontend nos seus repectivos repositórios de código com links
              abaixo.
            </Label>
          </p>
        </div>
        <div>
          <p>
            <Label size='large'>
              Veja os detalhes da API e do Front-end no Github:
            </Label>
          </p>
          <p>
            <a
              target='_blank'
              href='https://github.com/AkatsukiJS/opacity-project-api'
            >
              <Label size='large' kind='primary'>
                - API
              </Label>
            </a>
          </p>
          <p>
            <a
              target='_blank'
              href='https://github.com/AkatsukiJS/opacity-project-front-end'
            >
              <Label size='large' kind='primary'>
                - Front-end
              </Label>
            </a>
          </p>
        </div>
        <Container hasDropShadow={false} className='op__about__logocontainer'>
          <img
            className='op__about__logo'
            alt='akatsuki logo'
            src={require('../../assets/akatsuki_logo.png')}
          />
        </Container>
      </Container>
    </div>
  )
}

const AboutStyled = styled(About)`
  .op__about__title {
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.Fjalla};
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSize.XLarge};
  }
  .op__about__container {
    margin: 0;
    text-align: justify;
  }
  .op__about__logocontainer {
    text-align: center;
  }
  .op__about__logo {
    width: 180px;
  }
`

export default AboutStyled
