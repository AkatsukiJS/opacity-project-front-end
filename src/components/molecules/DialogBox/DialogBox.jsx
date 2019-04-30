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
  onConfirm?: () => mixed,
  /** className */
  className?: string
}

const style = ({ theme }) => css`
  min-width: 300px;
  display: inline-block;
  .op-dialog-box__titlebar {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.1);
    padding: 0.75rem 1rem;
    .op-dialog-box__titlebar_label {
      flex: 1;
    }
  }

  .op-dialog-box__buttonsset {
    display: flex;
    justify-content: flex-end;
  }

  .op-dialog-box__confirm {
    margin: 0 0 0 10px;
  }

  .op-dialog-box__close:hover {
    cursor: pointer;
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
    confirmText = '',
    className
  } = props

  const isValid = (text = '') => text && text.length > 0
  return (
    <StyledDialogBox className={className}>
      <Container
        coner={[10, 10, 0, 0]}
        className='op-dialog-box__titlebar'
        size='small'
        hasDropShadow={false}
      >
        <Label className='op-dialog-box__titlebar_label'>{title}</Label>
        <Icon
          className='op-dialog-box__close'
          kind='close'
          size='small'
          onClick={onClose}
        />
      </Container>

      <Container hasDropShadow={false} size='small' coner={[0, 0, 10, 10]}>
        {children}
      </Container>
      {cancelText || confirmText ? (
        <Container
          coner={[0, 0, 10, 10]}
          hasDropShadow={false}
          size='small'
          className='op-dialog-box__buttonsset'
        >
          {isValid(cancelText) && (
            <Button hasDropShadow size='medium' onClick={onCancel}>
              {cancelText}
            </Button>
          )}
          {isValid(confirmText) && (
            <Button
              size='medium'
              hasDropShadow
              onClick={onConfirm}
              kind='secondary'
              className='op-dialog-box__confirm'
            >
              {confirmText}
            </Button>
          )}
        </Container>
      ) : null}
    </StyledDialogBox>
  )
}

DialogBox.defaultProps = {}

export default DialogBox
