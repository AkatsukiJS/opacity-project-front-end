import React from 'react'
import ServerCard from './ServerCard'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

const group = 'GROUP-SERVER-CARD'
const dataOptions = [
  {
    key: 'Funçao',
    value: 'But I must explain'
  },
  {
    key: 'Atividade',
    value: 'lorem ipsum'
  }
]
const remunerationOptions = [
  {
    key: 'Salário Liquido',
    value: 'R$ 232.323,00'
  },
  {
    key: 'Salário Bruto',
    value: 'R$ 3.452.342,00'
  }
]

const infoOptions = [
  {
    title: 'Dados',
    payload: dataOptions
  },
  {
    title: 'Remuneração',
    payload: remunerationOptions
  }
]
const linkOption = 'https://portaldatransparencia.gov.br/servidores/000000'

storiesOf('Organisms', module).add('ServerCard', () => {
  const name = text('Name', 'Joao Armless', group)
  const link = text('Link', linkOption, group)
  const info = object('Info', infoOptions, group)
  return <ServerCard name={name} info={info} link={link} />
})
