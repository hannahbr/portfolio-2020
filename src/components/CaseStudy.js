import React from "react"
import styled from "styled-components"
import Button from "../common/Button"
import ContentWrapper from "../common/ContentWrapper"
import Hero from "../common/Hero"
import Img from "../common/Img"
import Tags from "../common/Tags"
import { H1, H2, P } from "../common/typography"
import ModalImage from "react-modal-image"

const ProjectGoalWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]};

  background: ${({ theme }) => theme.colours.projectGoal};
`

const SectionsWrapper = styled.div`
  background: ${({ theme }) => theme.colours.secondary2};
`

const SectionsContainer = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[0]} 0;
  max-width: 700px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroImage = styled(ModalImage)``

const CaseStudy = ({ content }) => {
  const {
    companyName,
    conducted,
    time,
    contributions,
    description,
    tags,
    heroImg,
    heroImgAlt,
    projectGoal,
    sections,
  } = content

  const heroImage = require(`../images/${heroImg}`)
  const heroLarge = require("../images/dur-main.png")

  return (
    <>
      <Hero>
        <div>
          <P darkBg>/ Work / {companyName}</P>
          <H1 darkBg>{companyName}</H1>
          <P darkBg>
            Conducted: {conducted} <br />
            Time: {time} <br />
            Contributions: {contributions}
          </P>
          <P darkBg>{description}</P>
          <Tags tags={tags} dark />
        </div>
        <HeroImage small={heroImage} large={heroLarge} alt={heroImgAlt} />
      </Hero>
      <ProjectGoalWrapper>
        <ContentWrapper direction="row">
          <Img src={heroImg} alt={heroImgAlt} />
          <div style={{ paddingLeft: "2rem" }}>
            <H2>Project Goal</H2>
            {projectGoal.description}
          </div>
        </ContentWrapper>
      </ProjectGoalWrapper>
      <SectionsWrapper>
        <SectionsContainer>{sections}</SectionsContainer>
      </SectionsWrapper>
      <ButtonWrapper>
        <Button to="/work">See more work</Button>
      </ButtonWrapper>
    </>
  )
}

export default CaseStudy
