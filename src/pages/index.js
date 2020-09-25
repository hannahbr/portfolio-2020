import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1, H4 } from "../common/typography"
import ContentWrapper from "../common/ContentWrapper"
import { Email, LinkedIn } from "../components/footer"
import CaseStudyList from "../common/CaseStudyList"

import Button from "../common/Button"
import Hero from "../common/Hero"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <div>
          <H1 darkBg>Hello!</H1>
          <H4 darkBg>
            I'm <strong>Hannah Braybrook</strong>, a{" "}
            <strong>UX designer</strong> currently @ CTI Digital{" "}
            <span role="img" aria-label="dance party">
              💃🎉
            </span>
          </H4>
          <Email />
          <LinkedIn />
        </div>
      </Hero>
      <ContentWrapper direction="column" breakout>
        <CaseStudyList />
        <Button to="/work">See more work</Button>
      </ContentWrapper>
    </Layout>
  )
}

export default IndexPage
