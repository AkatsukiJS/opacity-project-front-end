// @flow
/** @jsx jsx */

import {
  CategoryHeader,
  ServerCard,
  ActionsBar,
  DialogBoxModal,
  Button,
  RadioGroup
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
  const [selectedSort, setSelectedSort] = useState('Name')
  const [selectedOrder, setSelectedOrder] = useState('Crescente')

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
            key={i}
            className='op__category__servercard'
            name={el.cadastro['NOME']}
            info={transformServerData(el)}
            link={`${baseLink}/${el.id}`}
            isBlock
          />
        ))}
      </div>
      <DialogBoxModal
        title='Ordenar'
        isOpen={isOpenModal}
        onClose={() => setOpenModal(false)}
      >
        <div>
          <div className='op__dialogmodal__options__container'>
            <div>
              <RadioGroup
                selected={selectedSort}
                options={['Name', 'Salário Líquido', 'Salário Bruto']}
                direction='column'
                onSelect={setSelectedSort}
              />
            </div>
            <div>
              <RadioGroup
                selected={selectedOrder}
                options={['Crescente', 'Decrescente']}
                direction='column'
                onSelect={setSelectedOrder}
                isKindLabeled
              />
            </div>
          </div>
          <div className='op__dialogmodal__button'>
            <Button hasDropShadow>OK</Button>
          </div>
        </div>
      </DialogBoxModal>
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
  .op__dialogmodal__options__container {
    min-width: 280px;
    display: flex;
    justify-content: space-between;
  }
  .op__dialogmodal__button {
    margin: 16px 0 0;
    text-align: center;
    display: block;
  }
`

export default CategoryStyled
