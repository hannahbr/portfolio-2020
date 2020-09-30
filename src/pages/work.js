import React from "react"
import CaseStudyList from "../common/CaseStudyList"
import ContentWrapper from "../common/ContentWrapper"
import Hero from "../common/Hero"
import { H1, P } from "../common/typography"
import Layout from "../components/layout"

import Img from "../common/Img"

const WorkPage = () => {
  return (
    <Layout>
      <Hero>
        <div>
          <P darkBg>Home / Work /</P>
          <H1 darkBg>Work</H1>
        </div>
      </Hero>
      <ContentWrapper>
        <CaseStudyList />
      </ContentWrapper>
      <ContentWrapper>
        <Img small={"isol8-tn.png"} large={"isol8.png"} alt="Website design - i-sol8 is a startup business selling brackets for buildings." />
        <Img small={"stephanie-cs-tn.png"} large={"stephanie-cs.png"} alt="Website design & development - a showcase of sculpture work." />
        <Img small={"goc-tn.png"} large={"goc.png"} alt="Research & wireframing - a GDS inspired redesign of the GOC website." />
        <Img small={"personnel-check-tn.png"} large={"personnel-check.png"} alt="Wireframing - website redesign for a DBS checking website." />
        <Img small={"rcot-tn.png"} large={"rcot.png"} alt="Design - Redesigning the home page for the Royal College of Occupational Therapists." />
        <Img small={"laird-tn.png"} large={"laird.png"} alt="Wireframing - Complex product search for Laird Performance Materials." />
        <Img small={"devere-tn.png"} large={"devere.png"} alt="Wireframing - new site for a Devere hotel at short notice." />
        <Img small={"churchill-tn.png"} large={"churchill.png"} alt="Design, interaction design - redesign of Churchill China website at short notice." />
        <Img small={"mmu-tn.png"} large={"mmu.png"} alt="Research, wireframing - Axure wires for the new MMU site, with lab testing" />
      </ContentWrapper>
    </Layout>
  )
}

export default WorkPage
