// @flow
/** @jsx jsx */

import {
  CategoryHeader,
  ServerCard,
  ActionsBar,
  DialogBoxModal,
  Button,
  RadioGroup,
  Label,
  Loader
} from '../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { api, useApi } from '../client'
import { ErrorLabel } from './common'

const baseLink = 'https://portaldatransparencia.gov.br/servidores/'

const formatReal = n => `R$ ${n}`.replace('.', ',')

const transformServerData = raw => {
  return [
    {
      title: 'Dados',
      payload: [
        {
          key: 'Jornada de trabalho',
          value: raw.cadastro['JORNADA_DE_TRABALHO']
        },
        {
          key: 'Unidade Organizacional',
          value: raw.cadastro['UORG_EXERCICIO']
        }
      ]
    },
    {
      title: 'Remuneração',
      payload: [
        {
          key: 'Salário Bruto',
          value: formatReal(raw.remuneracao['REMUNERAÇÃO BÁSICA BRUTA (R$)'])
        },
        {
          key: 'Gratificação Natalina',
          value: formatReal(raw.remuneracao['GRATIFICAÇÃO NATALINA (R$)'])
        },
        {
          key: 'Férias',
          value: formatReal(raw.remuneracao['FÉRIAS (R$)'])
        },
        {
          key: 'IRRF',
          value: formatReal(raw.remuneracao['IRRF (R$)'])
        },
        {
          key: 'Salário Liquido',
          value: formatReal(
            raw.remuneracao['REMUNERAÇÃO APÓS DEDUÇÕES OBRIGATÓRIAS (R$)']
          )
        }
      ]
    }
  ]
}

const pageSize = 10

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
    return Array(size)
      .fill(0)
      .map((_, i) => i + 1)
  }
}

const ServersList = ({
  error,
  loading,
  data,
  page,
  totalItems,
  setCurrentPage
}) => {
  if (error) {
    return (
      <ErrorLabel label='Um erro inesperado ocorreu! Tente novamente mais tarde.' />
    )
  }
  if (loading) return <Loader label='Carregando' />

  const list = data.results || []
  const currentPage = page + 1

  return (
    <div>
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
        {makePaginationArray(totalItems, currentPage).map((el, key) => {
          const [child, canHandler] = isNaN(el)
            ? ['...', false]
            : [`${el}`, true]
          const kind = el === currentPage ? 'primary' : 'basic'
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
    </div>
  )
}

const orderMapping = {
  Crescente: 'ASC',
  Decrescente: 'DESC'
}

const sortMapping = {
  Name: 'NAME',
  'Salário Líquido': 'R_LIQUID',
  'Salário Bruto': 'R_BRUTE'
}

const Category = ({ className, history }) => {
  const state = history.location.state

  if (!(state && state['category'])) {
    return <Redirect to='/categories' />
  }

  const [isOpenModal, setOpenModal] = useState(false)
  const [refetchToggle, setRefetchToggle] = useState(false)
  const [selectedSort, setSelectedSort] = useState('Name')
  const [selectedOrder, setSelectedOrder] = useState('Crescente')
  const [currentPage, setCurrentPage] = useState(0)
  // const page = currentPage + 1
  // const list = getPage(serverList, currentPage, pageSize)

  const category = state['category']
  const categoryLabel = category.label
  const categoryKey = category.value
  const totalItems = category.count

  const { data, error, loading } = useApi(() => {
    return api.getCategory({
      category: categoryKey,
      offset: 10 * currentPage,
      limit: 10,
      sortBy: sortMapping[selectedSort],
      orderBy: orderMapping[selectedOrder]
    })
  }, [refetchToggle, currentPage])

  return (
    <div className={className}>
      <CategoryHeader
        title={categoryLabel + ' (UFPI)'}
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
      <ServersList
        data={data}
        loading={loading}
        error={error}
        page={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
      />
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
                options={Object.keys(sortMapping)}
                direction='column'
                onSelect={setSelectedSort}
              />
            </div>
            <div>
              <RadioGroup
                selected={selectedOrder}
                options={Object.keys(orderMapping)}
                direction='column'
                onSelect={setSelectedOrder}
                isKindLabeled
              />
            </div>
          </div>
          <div className='op__dialogmodal__button'>
            <Button
              hasDropShadow
              onClick={() => {
                setCurrentPage(0)
                setRefetchToggle(!refetchToggle)
                setOpenModal(false)
              }}
            >
              Ordenar
            </Button>
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

export default withRouter(CategoryStyled)
