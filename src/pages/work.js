import React from "react"
import CaseStudyList from "../common/CaseStudyList"
import ContentWrapper from "../common/ContentWrapper"
import Hero from "../common/Hero"
import { H1, P } from "../common/typography"
import Layout from "../components/layout"
import styled from "styled-components"

import { ImgModal, ImgWrapper } from "../common/Img"

const WorkImgWrapper = styled(ImgWrapper)`
  max-width: 1000px;
`

const CategoryLabel = styled(P)`
  color: ${({ theme }) => theme.colours.secondary3};
  padding: 0;
  margin: 0;
`

const WorkPage = () => {
  return (
    <Layout>
      <Hero>
        <div>
          <P darkBg>Home / Work /</P>
          <H1 darkBg>Work</H1>
        </div>
      </Hero>
      <ContentWrapper breakout>
        <CaseStudyList />
      </ContentWrapper>
      <ContentWrapper breakout>
        <CategoryLabel>Example</CategoryLabel>
        <WorkImgWrapper>
          <ImgModal
            className="work-modal"
            small={"isol8-tn.png"}
            large={"isol8.png"}
            alt="Website design - i-sol8 is a startup business selling brackets for buildings."
          />
          <ImgModal
            className="work-modal"
            small={"stephanie-cs-tn.png"}
            large={"stephanie-cs.png"}
            alt="Website design & development - a showcase of sculpture work."
          />
          <ImgModal
            className="work-modal"
            small={"goc-tn.png"}
            large={"goc.png"}
            alt="Research & wireframing - a GDS inspired redesign of the GOC website."
          />
          <ImgModal
            className="work-modal"
            small={"personnel-check-tn.png"}
            large={"personnel-check.png"}
            alt="Wireframing - website redesign for a DBS checking website."
          />
          <ImgModal
            className="work-modal"
            small={"rcot-tn.png"}
            large={"rcot.png"}
            alt="Design - Redesigning the home page for the Royal College of Occupational Therapists."
          />
        </WorkImgWrapper>
        <CategoryLabel> Example 3</CategoryLabel>
        <WorkImgWrapper>
          <ImgModal
            className="work-modal"
            small={"laird-tn.png"}
            large={"laird.png"}
            alt="Wireframing - Complex product search for Laird Performance Materials."
          />
          <ImgModal
            className="work-modal"
            small={"devere-tn.png"}
            large={"devere.png"}
            alt="Wireframing - new site for a Devere hotel at short notice."
          />
          <ImgModal
            className="work-modal"
            small={"churchill-tn.png"}
            large={"churchill.png"}
            alt="Design, interaction design - redesign of Churchill China website at short notice."
          />
          <ImgModal
            className="work-modal"
            small={"mmu-tn.png"}
            large={"mmu.png"}
            alt="Research, wireframing - Axure wires for the new MMU site, with lab testing"
          />
        </WorkImgWrapper>
      </ContentWrapper>
    </Layout>
  )
}

export default WorkPage
