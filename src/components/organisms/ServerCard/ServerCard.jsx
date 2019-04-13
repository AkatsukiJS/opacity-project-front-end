/* @flow */
/** @jsx jsx */
import { useState } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Label, Container, Expander } from '../../../components'

type Data = {
  key: string,
  value: string
}

type Info = {
  title: string,
  payload: Data[]
}

type Props = {
  /** Name */
  name: string,
  /** Link of server page */
  link: string,
  /** Server info */
  info: Info[],
  /** className */
  className?: string
}

const style = ({ theme }) => css`
  display: block;
  padding: 0;
  margin: 0;
  a {
    text-decoration: none;
  }
  .op__servercard-expander {
    margin: 0.5rem 0;
  }
  .op__servercard-infolist {
    display: flex;
  }
  .op__servercard-info {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 1rem 0 0;
  }
  .op__servercard-title {
    padding: 0 0 0 0.5rem;
    border-left: 4pt solid ${theme.color.Crimson};
  }
  .op__servercard-info-key {
    margin: 0 0.5rem 0 0;
  }
`

const StyledServerCard = styled.div`
  ${style}
`

/** ServerCard component */
const ServerCard = (props: Props) => {
  const { name = '', info = [], link = '', className } = props
  const [expanders, setExpander] = useState(info.map(_ => false))
  return (
    <StyledServerCard className={className}>
      <Container>
        <div className='op__servercard-title'>
          <Label size='large'>{name.toUpperCase()}</Label>
        </div>
        <div>
          {info.map((el, i) => (
            <Expander
              title={el.title.toUpperCase()}
              isExpanded={expanders[i]}
              onExpand={() =>
                setExpander(expanders.map((el, k) => (k === i ? !el : el)))
              }
              className='op__servercard-expander'
            >
              <div className='op__servercard-infolist'>
                <div className='op__servercard-info'>
                  {el.payload.map(data => (
                    <Label kind='primary'>{data.key}</Label>
                  ))}
                </div>
                <div className='op__servercard-info'>
                  {el.payload.map(data => (
                    <Label>{data.value}</Label>
                  ))}
                </div>
              </div>
            </Expander>
          ))}
        </div>
        <div>
          <a href={link} target='_blank'>
            <Label kind='grizzly'>{link}</Label>
          </a>
        </div>
      </Container>
    </StyledServerCard>
  )
}

ServerCard.defaultProps = {}

export default ServerCard
