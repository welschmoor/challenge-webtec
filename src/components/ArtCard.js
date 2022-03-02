import styled from "styled-components"
import Modal from "./Modal"

// e steht bei mir fast immer fuer each
const ArtCard = ({ e, setModalData, setModalOpened }) => {
  const imgURL = `https://www.artic.edu/iiif/2/${e.image_id}/full/843,/0/default.jpg`


  const modalDataHandler = () => {
    setModalData({ imgURL: imgURL, e: e })
    setModalOpened(true)
  }

  return (
    <div >
      <Title>{e.title}</Title>
      <IMG src={imgURL} alt={e.title} onClick={modalDataHandler} />
      <br />
      <br />
    </div>
  )
}

const IMG = styled.img`
  width: 100%;
  cursor: pointer;
`

const Title = styled.h3`
  font-size: 1rem;
  color: ${p => p.theme.TEXT.title};
`

export default ArtCard