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
  /** Content's components */
  children?: () => mixed
}

const style = ({ theme }) => css`
  text-align: center;
  h1 {
    font-family: ${theme.fontFamily.Fjalla};
    font-size: ${theme.fontSize.Large};
    text-transform: uppercase;
  }
`

const StyledCategoryHeader = styled.div`
  ${style}
`

const CategoryHeader = (props: Props) => {
  const { title, subtitle, hasLine, children, ...others } = props
  return (
    <Container {...others}>
      <StyledCategoryHeader>
        <h1>{title}</h1>
        <Label kind={'grizzly'} hasLine={hasLine}>
          {subtitle}
        </Label>
        {children}
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
