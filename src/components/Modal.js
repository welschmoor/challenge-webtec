
import styled from "styled-components"

const Modal = () => {
  return (
    <ModalWrapper>
      <CloseBTN >X</CloseBTN>
      MODAL
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  display: ${p => p.modalOpened ? "" : "none"};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  height: 200px;
  width: 300px;
  background-color: grey;
`

const CloseBTN = styled.button`
  position: absolute;
`



export default Modal

