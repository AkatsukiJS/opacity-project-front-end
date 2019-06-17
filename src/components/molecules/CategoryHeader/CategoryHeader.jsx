/* @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Container, Label } from '../../../components'

type Props = {
  /** Name of category */
  title: string,
  /** Subtitle */
  subtitle: string,
  /** Line */
  hasLine?: boolean,
  /** Dropshadow */
  hasDropShadow?: boolean,
  /** className */
  className?: string
}

const style = ({ theme, hasLine }) => css`
  text-align: center;
  padding: 0;
  padding: 0;
  margin: 0;
  .op__categoryheader__content {
    display: inline-block;
    padding: 0 24px;
    box-sizing: border-box;
    ${hasLine &&
      `
      :after{
        content: '';
        display: block;
        width: 80%;
        height: 3px;
        border-radius: 4px;
        margin: 10px auto 0;
        background-color: ${theme.color.LightGray};
      }
    `}
    h1 {
      font-weight: normal;
      font-family: ${theme.fontFamily.Fjalla};
      font-size: ${theme.fontSize.XLarge};
      text-transform: uppercase;
    }
  }
`

const StyledCategoryHeader = styled.div`
  ${style}
`

const CategoryHeader = (props: Props) => {
  const { title, subtitle, hasLine, className } = props
  return (
    <Container className={className}>
      <StyledCategoryHeader hasLine={hasLine}>
        <div className='op__categoryheader__content'>
          <div>
            <h1>{title}</h1>
          </div>
          <Label kind={'grizzly'} size='small'>
            {subtitle}
          </Label>
        </div>
      </StyledCategoryHeader>
    </Container>
  )
}

CategoryHeader.defaultProps = {
  title: 'Categoria',
  subtitle: 'Subtítulo',
  hasLine: false
}

export default CategoryHeader
