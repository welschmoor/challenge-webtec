
import styled from "styled-components"

const Modal = ({ modalOpened, e }) => {
  const imgURL = `https://www.artic.edu/iiif/2/${e.image_id}/full/843,/0/default.jpg`

  return (
    <ModalWrapper modalOpened={modalOpened}>
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
  width: 90%;
  max-width: 1000px;

  /* background-color: grey; */
`

const IMG = styled.img`
  display: block;
  cursor: pointer;
  width: 100%;
`

export default Modal

