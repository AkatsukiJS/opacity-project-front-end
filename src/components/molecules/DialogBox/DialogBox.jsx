/* @flow */
/** @jsx jsx */
import * as React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Container, Label, Icon, Button } from '../../../components'

type Props = {
  /** Title of dialog box */
  title?: string,
  /** A single node html */
  children: React.Node,
  /** A text to confirm button */
  confirmText?: string,
  /** A text to cancel button */
  cancelText?: string,
  /** onClose handler  */
  onClose?: () => mixed,
  /** onCancel handler */
  onCancel?: () => mixed,
  /** onConfirm handler */
  onConfirm?: () => mixed
}

const style = ({ theme }) => css`
  min-width: 300px;
  display: inline-block;
  .op-dialog-box__titlebar {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    text-align: center;

    .op-dialog-box__titlebar_label {
      flex: 1;
    }
  }

  .op-dialog-box__buttonsset {
    display: flex;
    justify-content: flex-end;
  }
`
const StyledDialogBox = styled.div`
  ${style}
`

/** DialogBox component */
const DialogBox = (props: Props) => {
  const {
    children,
    title,
    onClose,
    onCancel,
    onConfirm,
    cancelText = '',
    confirmText = ''
  } = props

  const isValid = (text = '') => text && text.length > 0
  return (
    <StyledDialogBox {...props}>
      <Container
        coner={[10, 10, 0, 0]}
        className='op-dialog-box__titlebar'
        size='small'
      >
        <Label className='op-dialog-box__titlebar_label'>{title}</Label>
        <Icon kind='close' size='small' onClick={onClose} />
      </Container>

      <Container hasDropShadow={false} size='small'>
        {children}
      </Container>
      <Container
        hasDropShadow={false}
        size='small'
        className='op-dialog-box__buttonsset'
      >
        {isValid(cancelText) && (
          <Button size='medium' onClick={onCancel}>
            {cancelText}
          </Button>
        )}
        {isValid(confirmText) && (
          <Button size='medium' onClick={onConfirm} kind='secondary'>
            {confirmText}
          </Button>
        )}
      </Container>
    </StyledDialogBox>
  )
}

DialogBox.defaultProps = {}

export default DialogBox
