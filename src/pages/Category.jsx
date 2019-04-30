// @flow
/** @jsx jsx */

import {
  CategoryHeader,
  ServerCard,
  ActionsBar,
  ModalOverlay
} from '../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { useState } from 'react'
import data from '../temp_data.json'

const serverList = data.results
const baseLink = 'https://portaldatransparencia.gov.br/servidores/'

const transformServerData = raw => {
  return [
    {
      title: 'Dados',
      payload: [
        {
          key: 'Função',
          value: raw.cadastro['FUNCAO']
        },
        {
          key: 'Atividade',
          value: raw.cadastro['ATIVIDADE']
        }
      ]
    },
    {
      title: 'Remuneração',
      payload: [
        {
          key: 'Salário Liquido',
          value: raw.remuneracao['REMUNERAÇÃO APÓS DEDUÇÕES OBRIGATÓRIAS (R$)']
        },
        {
          key: 'Salário Bruto',
          value: raw.remuneracao['REMUNERAÇÃO BÁSICA BRUTA (R$)']
        }
      ]
    }
  ]
}

const Category = ({ className }) => {
  const [isOpenModal, setOpenModal] = useState(false)

  return (
    <div className={className}>
      <CategoryHeader
        title={data.category}
        subtitle='FONTE: Portal da Transparencia, Janeiro/2018'
      />
      <div>
        <ActionsBar
          actions={[
            {
              name: 'Ordenar',
              onClick: () => {
                setOpenModal(true)
              }
            }
          ]}
          justifyContent='flex-end'
        />
      </div>
      <div className='op__category__container'>
        {serverList.map((el, i) => (
          <ServerCard
            className='op__category__servercard'
            name={el.cadastro['NOME']}
            info={transformServerData(el)}
            link={`${baseLink}/${el.id}`}
            isBlock
          />
        ))}
      </div>
      <ModalOverlay isOpen={isOpenModal} />
    </div>
  )
}

const CategoryStyled = styled(Category)`
  .op__category__container {
    margin: 1rem 0 0 0;
  }
  .op__category__servercard:nth-of-type(n + 1) {
    margin: 1rem 0 0 0;
  }
`

export default CategoryStyled
