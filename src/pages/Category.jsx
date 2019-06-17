// @flow
/** @jsx jsx */

import {
  CategoryHeader,
  ActionsBar,
  DialogBoxModal,
  Button,
  RadioGroup
} from '../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { api, useApi } from '../client'
import { ServersList } from './common'

const orderMapping = {
  Crescente: 'ASC',
  Decrescente: 'DESC'
}

const sortMapping = {
  Nome: 'NAME',
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
  const [selectedSort, setSelectedSort] = useState('Nome')
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
