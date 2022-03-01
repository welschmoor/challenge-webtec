import styled from "styled-components"

// e steht bei mir fast immer fuer each
const ArtCard = ({ e }) => {
  const imgURL = `https://www.artic.edu/iiif/2/${e.image_id}/full/843,/0/default.jpg`

  return (
    <div>
      <Title>{e.title}</Title>
      <IMG src={imgURL} alt={e.title} />
      <br/>
      <br/>
    </div>
  )
}

const IMG = styled.img`
  
  width: 100%;
`

const Title = styled.h3`
  font-size: 1rem;
  color: ${p=>p.theme.TEXT.title};
`

export default ArtCard