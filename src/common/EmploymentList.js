import React from "react"
import { H2, H4, P } from "./typography"
import EmploymentCard from "./EmploymentCard"

import styled from "styled-components"
import Tags from "./Tags"

const EmploymentWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[6]};
  @media only screen and (max-width: 943px) {
    padding: 0 ${({ theme }) => theme.spacing[3]};
  }
  @media only screen and (max-width: 576px) {
    padding: 0;
  }
`

const Header = styled(H2)`
  padding: ${({ theme }) => theme.spacing[2]} 0;
`

const SkillHeader = styled(P)`
  color: ${({ theme }) => theme.colours.secondary3};
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing[0]};
`

const SkillWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[2]};
`

const SkillsSection = styled.section`
  padding-bottom: ${({ theme }) => theme.spacing[2]};
`

const EmploymentPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.desktop};
  margin: auto;

  @media only screen and (max-width: ${({ theme }) => theme.tabletBP}) {
    max-width: 95vw;
  }
`

const skills = {
  designResearch: [
    "Prototyping",
    "Usability testing",
    "Heuristic analysis",
    "Wireframing",
    "Front-end development",
    "Graphic/ visual design",
    "Information architecture",
    "Analytics",
    "Interaction design",
    "User research (lab/field)",
  ],
  communicationManagment: [
    "Client management",
    "Stakeholder engagement",
    "Workshopping",
    "Working with developers",
  ],
  software: [
    "Figma",
    "Adobe CC (xD, Ps, Ai, Ae)",
    "AxureRP",
    "HTML/CSS",
    "Google Analytics",
    "Optimal Workshop",
    "Miro",
    "Hotjar",
    "Blender (learning)",
  ],
}

const EmploymentList = () => {
  return (
    <EmploymentPageWrapper>
      <Header>Employment</Header>
      <EmploymentWrapper>
        <EmploymentCard dates="2019 - present" company="CTI Digital">
          <H4>UX Designer</H4>
          <P>
            Working in the Strategy and User Experience team at CTI to work
            directly with clients to deliver fantastic digital products.
          </P>

          <P>
            In my time at CTI I’ve worked with a wide range of clients some of
            which include Manchester Metropolitan University, Durham University,
            International Animal Rescue, Churchill China, The General Optical
            Council, Drinkaware, Polyflor and Keep Britain Tidy.
          </P>
          <P>
            Typical activies can include: <br />
            Workshopping, user research, usability testing, data analysis,
            persona/ user journey creation, information architecture,
            wireframing, prototyping and design.
          </P>
        </EmploymentCard>
        <EmploymentCard dates="2015 - 2019" company="UCAS">
          <H4>UX Designer</H4>
          <P>
            Working within the UX team, I worked alongside development teams and
            product owners to deliver improvements on various projects including
            the main UCAS information and advice site, the search functionality
            for courses and developing a new product for the business facing
            side of the charity.
          </P>
          <P>
            Day-to-day tasks included creating wireframes, prototypes and high
            fidelity mockups, usability testing with students, and developing
            the bespoke UCAS Design Framework.
          </P>
          <H4>Digital Designer/ Junior Digital Designer</H4>
          <P>
            I designed, created and maintained UCAS’ marketing email templates,
            campaign pages, digital event software, social media and video
            content.
          </P>
        </EmploymentCard>
      </EmploymentWrapper>
      <Header>Education</Header>
      <EmploymentWrapper>
        <EmploymentCard
          dates="2011 - 2014"
          company="University of Gloucestershire"
        >
          <H4>BSc. Multimedia Web Design (hons) 2:1</H4>
          <P>
            3 year degree covering many subjects including web design, video
            game production, programming, project management and multimedia.
          </P>
        </EmploymentCard>
        <EmploymentCard
          dates="2004 - 2011"
          company="Churchdown Secondary School"
        >
          <P>
            3 A Levels or equivalent in IT, English Literature and Fine
            Art.GCSEs – 10 subjects including Maths, English and Science.
          </P>
        </EmploymentCard>
      </EmploymentWrapper>
      <SkillsSection>
        <Header>Skills</Header>
        <SkillHeader>Design/ research</SkillHeader>
        <SkillWrapper>
          <Tags tags={skills.designResearch} noFade />
        </SkillWrapper>
        <SkillHeader>Communication/ management</SkillHeader>
        <SkillWrapper>
          <Tags tags={skills.communicationManagment} noFade />
        </SkillWrapper>
        <SkillHeader>Software</SkillHeader>
        <SkillWrapper>
          <Tags tags={skills.software} noFade />
        </SkillWrapper>
      </SkillsSection>
    </EmploymentPageWrapper>
  )
}

export default EmploymentList
