/* @flow */
/** @jsx jsx */
import type { Node } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { DialogBox, ModalOverlay } from '../../../components'

type Props = {
  /** flag for show the modal */
  isOpen: boolean,
  /** Title of dialog box */
  title?: string,
  /** A single node html */
  children: Node,
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
  padding: 0;
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
  widht: 100%;
  height: 100vh;
  .op__dialogmodal__container {
    position: fixed;
    display: flex;
    justify-content: center;
    justify-items: center;
    width: 100%;
    height: 100vh;
    z-index: 20;
  }
  .op__dialogmodal__dialog {
    position: relative;
    margin: auto;
  }
`

const StyledDialogBoxModal = styled.div`
  ${style}
`

/** DialogBoxModal component */
const DialogBoxModal = (props: Props) => {
  const {
    isOpen,
    children,
    title,
    onClose,
    onCancel,
    onConfirm,
    cancelText = '',
    confirmText = '',
    className
  } = props

  return isOpen ? (
    <StyledDialogBoxModal className={className}>
      <ModalOverlay isOpen={isOpen} />
      <div className='op__dialogmodal__container'>
        <DialogBox
          className='op__dialogmodal__dialog'
          title={title}
          onClose={onClose}
          onCancel={onCancel}
          onConfirm={onConfirm}
          cancelText={cancelText}
          confirmText={confirmText}
        >
          {children}
        </DialogBox>
      </div>
    </StyledDialogBoxModal>
  ) : null
}

DialogBoxModal.defaultProps = {}

export default DialogBoxModal
