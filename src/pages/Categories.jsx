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
import { ErrorLabel } from './common'

const toCategoriesList = list => {
  return list.map(el => ({
    label: el.label,
    value: el.key,
    count: el.count
  }))
}

// @flow
const SelectCategory = ({ onSelect, selected, setSelected }) => {
  const { data, error, loading } = useApi(api.getCategories, [])

  // console.log(data, error, loading)
  if (error) {
    return (
      <ErrorLabel label='Um erro inesperado ocorreu! Tente novamente mais tarde.' />
    )
  }

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
          onSelect={(n, k) => setSelected({ name: n, key: k })}
          className='op__categories__select'
          value={selected.name}
          placeholder='Selecione'
        />
      </div>
      <Button
        hasDropShadow
        size='medium'
        // onSelect({label, key, count})
        onClick={() => selected.name !== 'none' && onSelect(list[selected.key])}
      >
        OK
      </Button>
    </Container>
  )
}

const Categories = ({ className, history }) => {
  const [selected, setSelected] = useState({ name: 'none', key: -1 })
  // console.log(selected)

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
