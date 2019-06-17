// @flow
/** @jsx jsx */

import { Label, Container } from '../../components'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

const ErrorLabel = ({ className, label }) => {
  return (
    <Container className={className}>
      <Label kind='primary' size='large'>
        {label}
      </Label>
    </Container>
  )
}

const ErrorLabelStyled = styled(ErrorLabel)`
  text-align: center;
`

export default ErrorLabelStyled
