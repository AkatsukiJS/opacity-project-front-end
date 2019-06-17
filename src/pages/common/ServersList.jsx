// @flow
/** @jsx jsx */

import { jsx } from '@emotion/core'
import ErrorLabel from './ErrorLabel.jsx'
import { ServerCard, Loader, Label } from '../../components'

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

type Server = {
  id: string,
  cadastro: {
    NOME: string,
    JORNADA_DE_TRABALHO: string,
    UORG_EXERCICIO: string
  },
  remuneracao: {
    'REMUNERAÇÃO BÁSICA BRUTA (R$)': string,
    'GRATIFICAÇÃO NATALINA (R$)': string,
    'FÉRIAS (R$)': string,
    'IRRF (R$)': string,
    'REMUNERAÇÃO APÓS DEDUÇÕES OBRIGATÓRIAS (R$)': string
  }
}

type Props = {
  error: boolean,
  loading: boolean,
  data: {
    results: Server[]
  },
  page: number,
  totalItems: number,
  setCurrentPage: (q: number) => mixed
}

const ServersList = ({
  error,
  loading,
  data,
  page,
  totalItems,
  setCurrentPage
}: Props) => {
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
            key={el.id}
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

export default ServersList
