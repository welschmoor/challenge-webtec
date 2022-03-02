
import styled from "styled-components"

const Modal = ({ modalOpened, e }) => {
  const imgURL = `https://www.artic.edu/iiif/2/${e.image_id}/full/843,/0/default.jpg`

  return (
    <ModalWrapper modalOpened={modalOpened}>
      <CloseBTN >X</CloseBTN>
      <IMG src={imgURL} alt={e.title} />
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

  background-color: grey;
`

const CloseBTN = styled.button`
  position: absolute;
`

const IMG = styled.img`
  width: 100%;
  cursor: pointer;
`

export default Modal

