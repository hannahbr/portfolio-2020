import React from "react"
import styled from "styled-components"
import Button from "../common/Button"
import Hero from "../common/Hero"
import { Img } from "../common/Img"
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`

const ProjectContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.desktop};
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.tabletBP}) {
    max-width: 95vw;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobileBP}) {
    max-width: ${({ theme }) => theme.maxWidth.mobile};
    flex-direction: column;
  }

  & div {
    padding-left: ${({ theme }) => theme.spacing[1]};
    @media only screen and (max-width: ${({ theme }) => theme.mobileBP}) {
      padding: 0;
    }
  }
`

export const SectionContainer = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[0]} ${({ theme }) => theme.spacing[2]}
    0 ${({ theme }) => theme.spacing[2]};
  max-width: 760px;
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
        <div style={{ paddingTop: "1rem" }}>
          <Img src={heroImg} alt={heroImgAlt} />
        </div>
      </Hero>
      <ProjectGoalWrapper>
        <ProjectContentWrapper>
          <Img src={projectGoal.image} alt={heroImgAlt} />
          <div>
            <H2>Project Goal</H2>
            {projectGoal.description}
          </div>
        </ProjectContentWrapper>
      </ProjectGoalWrapper>
      <SectionsWrapper>{sections}</SectionsWrapper>
      {/* removed SectionsContainer from inner */}
      <ButtonWrapper>
        <Button to="/work">See more work</Button>
      </ButtonWrapper>
    </>
  )
}

export default CaseStudy
