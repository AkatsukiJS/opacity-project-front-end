// @flow
/** @jsx jsx */

import { Button, Label, CategoryHeader, Container, Select } from '../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

const categoriesList = [
  { label: 'Professores do magisterio superior', value: 'Categoria_A' },
  { label: 'Categoria b', value: 'Categoria_B' },
  { label: 'Categoria c', value: 'Categoria_C' },
  { label: 'Categoria d', value: 'Categoria_D' },
  { label: 'Categoria e', value: 'Categoria_E' }
]

const Categories = ({ className }) => (
  <div className={className}>
    <CategoryHeader
      title='SERVIDORES DA UFPI'
      subtitle='FONTE: Portal da Transparencia, Janeiro/2018'
    />
    <Container className='op__categories__container' hasDropShadow={false}>
      <div className='op__categories__title'>
        <Label size='medium'>ESCOLHA UMA CATEGORIA</Label>
      </div>
      <div>
        <Select
          isBlock
          options={categoriesList}
          onSelect={t => console.log(t)}
          className='op__categories__select'
          value='null'
          placeholder='Selecione'
        />
      </div>
      <Button hasDropShadow size='medium'>
        OK
      </Button>
    </Container>
  </div>
)

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

export default CategoriesStyled
