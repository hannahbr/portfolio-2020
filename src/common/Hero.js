import React from "react"
import ContentWrapper from "./ContentWrapper"
import styled from "styled-components"

const StyledHero = styled.section`
  background: black;
  padding: ${({ theme }) => theme.spacing[3]};
`

const Hero = ({ children, withPictures }) => {
  const direction = withPictures ? "row" : "column"
  return (
    <StyledHero>
      <ContentWrapper direction={direction}>{children}</ContentWrapper>
    </StyledHero>
  )
}

export default Hero
