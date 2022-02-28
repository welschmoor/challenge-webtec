
import styled from "styled-components"

const About = () => {
  return (
    <AboutWrapper>
      <P>
        This was done with React, React Router, axios, styled components.
      </P>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  margin: 40px ${p => p.theme.MARGIN.mar10};
`

const P = styled.p`
  font-size: 0.8rem;
`

export default About