import React from "react"
import styled from "styled-components"
import ContentWrapper from "../common/ContentWrapper"
import Hero from "../common/Hero"
import Tags from "../common/Tags"
import { H1, H2, P } from "../common/typography"

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
  padding: ${({ theme }) => theme.spacing[5]} 0;
  max-width: 700px;
`

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
        <img
          src={heroImage}
          style={{ objectFit: "cover", width: "50%" }}
          alt={heroImgAlt}
        />
      </Hero>
      <ProjectGoalWrapper>
        <ContentWrapper direction="row">
          <img
            src={heroImage}
            style={{ objectFit: "cover", width: "50%", paddingRight: "2rem" }}
          />
          <div>
            <H2>Project Goal</H2>
            {projectGoal.description}
          </div>
        </ContentWrapper>
      </ProjectGoalWrapper>
      <SectionsWrapper>
        <SectionsContainer>{sections}</SectionsContainer>
      </SectionsWrapper>
    </>
  )
}

export default CaseStudy
