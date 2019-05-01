// @flow
/** @jsx jsx */

import {
  CategoryHeader,
  ServerCard,
  ActionsBar,
  DialogBoxModal,
  Button,
  RadioGroup,
  Label
} from '../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { useState } from 'react'
import data from '../temp_data.json'

const serverList = data.results.reduce(
  (acc, cur) => [...acc, ...Array(40).fill(cur)],
  []
)
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

const pageSize = 5
const totalItems = serverList.length

const makePaginationArray = (sizeList, currentPage) => {
  const size = Math.trunc(sizeList / pageSize) + (sizeList % pageSize !== 0)
  if (size > 4) {
    const prv = currentPage - 1
    const nxt = currentPage + 1
    const prvl = prv > 2 ? [NaN, prv] : prv === 2 ? [prv] : []
    const nxtl = nxt < size - 1 ? [nxt, NaN] : nxt === size - 1 ? [nxt] : []
    const curl = currentPage === 1 || currentPage === size ? [] : [currentPage]
    return [1, ...prvl, ...curl, ...nxtl, size]
  } else {
    return [1, 2, 3, 4]
  }
}

const getPage = (list, pageNumber, pageSize) => {
  const offset = pageSize * pageNumber
  const end = offset + pageSize
  return list.slice(offset, end)
}

const Category = ({ className }) => {
  const [isOpenModal, setOpenModal] = useState(false)
  const [selectedSort, setSelectedSort] = useState('Name')
  const [selectedOrder, setSelectedOrder] = useState('Crescente')
  const [currentPage, setCurrentPage] = useState(0)
  const page = currentPage + 1
  const list = getPage(serverList, currentPage, pageSize)
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
        {list.map((el, i) => (
          <ServerCard
            key={i}
            className='op__category__servercard'
            name={el.cadastro['NOME']}
            info={transformServerData(el)}
            link={`${baseLink}${el.id}`}
            isBlock
          />
        ))}
      </div>
      <div className='op__category__pagination'>
        {makePaginationArray(totalItems, page).map((el, key) => {
          const [child, canHandler] = isNaN(el)
            ? ['...', false]
            : [`${el}`, true]
          const kind = el === page ? 'primary' : 'basic'
          return (
            <div
              className='op__category__pagenumber'
              key={key}
              onClick={() => canHandler && setCurrentPage(el - 1)}
            >
              <Label size='large' kind={kind}>
                {child}
              </Label>
            </div>
          )
        })}
      </div>
      <DialogBoxModal
        title='Ordenar por'
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
            <Button hasDropShadow>Ordenar</Button>
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
  .op__category__pagination {
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem;
  }
  .op__category__pagenumber {
    cursor: pointer;
    margin: 0 8px;
  }
`

export default CategoryStyled
