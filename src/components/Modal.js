
import styled from "styled-components"

const Modal = ({ modalOpened, e, setModalOpened }) => {
  const imgURL = `https://www.artic.edu/iiif/2/${e.image_id}/full/843,/0/default.jpg`

  return (
    <ModalWrapper modalOpened={modalOpened}>
      <IMG src={imgURL} alt={e.title} onClick={() => setModalOpened(false)} />
    </ModalWrapper>
  )
}


//example of CSS of how to make picture squeeze its height and width without losing aspect ratio
const ModalWrapper = styled.div`
  display: ${p => p.modalOpened ? "flex" : "none"};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  max-width: 1000px;
  height: 90vh;
  width: 90vw;
`

const IMG = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-height: 90vh; // new
  object-fit: contain;
`

export default Modal

