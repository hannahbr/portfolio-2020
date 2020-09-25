import React from "react"
// import ContentWrapper from "./ContentWrapper"
import styled from "styled-components"

const StyledHero = styled.section`
  background: black;
  padding: ${({ theme }) => theme.spacing[3]};
`

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: ${({ theme }) => theme.maxWidth.desktop};
  margin: auto;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.tabletBP}) {
    flex-direction: column;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobileBP}) {
  }
`

const Hero = ({ children }) => {
  return (
    <StyledHero>
      <HeroWrapper>{children}</HeroWrapper>
    </StyledHero>
  )
}

export default Hero
