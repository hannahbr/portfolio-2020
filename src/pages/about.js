import React from "react"
import EmploymentList from "../common/EmploymentList"
import Hero from "../common/Hero"
import { H1, P } from "../common/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import hannah1 from "../images/hannah-about-1.png"
import hannah2 from "../images/hannah-about-2.png"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="about" />
      <Hero withPictures>
        <div style={{ paddingRight: "3rem" }}>
          <P darkBg>Home / About /</P>
          <H1 darkBg>About</H1>
          <P darkBg>I’m a UX designer currently living in Manchester.</P>{" "}
          <P darkBg>
            I come from a digital design background - I was lucky enough to be
            able to work closely with the UX team at UCAS. I loved being able to
            work directly with users and really solve their problems so much
            that I decided to move into UX!
          </P>
          <P darkBg>
            Since then I’ve moved up north to Manchester. I’ve been getting tons
            of experience at CTI working with lots of different companies, and
            I'm always looking for opportunities to develop my skills and create
            digital products that people love.
          </P>
        </div>
        <div>
          <img
            style={{
              height: "200px",
              width: "400px",
              paddingLeft: "2rem",
              objectFit: "cover",
            }}
            src={hannah1}
            alt="Winning a competition"
          />
          <img
            style={{
              height: "200px",
              width: "400px",
              objectFit: "cover",
              paddingLeft: "2rem",
            }}
            src={hannah2}
            alt="Giving a presentation"
          />
        </div>
      </Hero>
      <EmploymentList />
    </Layout>
  )
}

export default AboutPage
