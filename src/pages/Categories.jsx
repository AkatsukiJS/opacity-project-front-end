// @flow
/** @jsx jsx */

import {
  Button,
  Label,
  CategoryHeader,
  Container,
  Select,
  Loader
} from '../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useApi, api } from '../client'

const toCategoriesList = list => {
  return list.map(el => ({
    label: el.label,
    value: el.key,
    count: el.count
  }))
}

const SelectCategory = ({ onSelect, selected, setSelected }) => {
  const { data, error, loading } = useApi(api.getCategories)

  if (error) return <Label kind='primary'>{'Algum erro ocorreu! :('}</Label>
  if (loading) return <Loader label='Carregando' />

  const list = toCategoriesList(data)

  return (
    <Container className='op__categories__container' hasDropShadow={false}>
      <div className='op__categories__title'>
        <Label size='medium'>ESCOLHA UMA CATEGORIA</Label>
      </div>
      <div>
        <Select
          isBlock
          options={list}
          onSelect={t => setSelected(t)}
          className='op__categories__select'
          value={selected}
          placeholder='Selecione'
        />
      </div>
      <Button
        hasDropShadow
        size='medium'
        onClick={() => selected !== 'none' && onSelect(selected)}
      >
        OK
      </Button>
    </Container>
  )
}

const Categories = ({ className, history }) => {
  const [selected, setSelected] = useState('none')

  return (
    <div className={className}>
      <CategoryHeader
        title='SERVIDORES DA UFPI'
        subtitle='FONTE: Portal da Transparencia, Janeiro/2018'
      />
      <SelectCategory
        selected={selected}
        setSelected={setSelected}
        onSelect={category =>
          history.push({
            pathname: '/category',
            state: {
              category
            }
          })
        }
      />
    </div>
  )
}

const CategoriesStyled = styled(Categories)`
  .op__categories__container {
    margin: 1rem 0 0 0;
    text-align: center;
  }

  .op__categories__title {
    text-align: center;
  }

  .op__categories__select {
    margin: 1.5rem 0;
  }
`

export default withRouter(CategoriesStyled)
