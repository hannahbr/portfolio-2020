import React from "react"
import CaseStudyList from "../common/CaseStudyList"
import ContentWrapper from "../common/ContentWrapper"
import Hero from "../common/Hero"
import { H1, P } from "../common/typography"
import Layout from "../components/layout"

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
    </Layout>
  )
}

export default WorkPage
