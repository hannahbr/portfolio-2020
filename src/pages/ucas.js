import React from "react"
import CaseStudy from "../components/CaseStudy"
import { H3, P } from "../common/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ucasImg from "../images/ucas.png"
import Button from "../common/Button"

const content = {
  companyName: "UCAS",
  conducted: "2018",
  time: "3 months",
  status: "Live",
  description: "Website redevelopment",
  tags: ["design", "research", "long-term"],
  heroImg: "ucas.png",
  heroImgAlt: "Ucas Course search",
  projectGoal: {
    image: "ucas.png",
    description: (
      <P>
        The information and advice portion of ucas.com was in need of
        improvement due to evolving brands, increasing amounts of content and
        was well-known to its users for being confusing to use.
      </P>
    ),
  },
  sections: [
    <>
      <H3>Delivery</H3>
      <P>
        Working with the UX team (team of 4 including me) I was given wireframes
        to visually update the (ucas.com) website.
      </P>
      <P>
        I spent time with the development team to make sure it was technically
        possible and then made a few variations whilst working with the design
        and sales teams to ensure it worked with the brand and advertisers.
      </P>
      <P>
        Alongside this we worked as a team to improve the information
        architecture as at the time there were many duplicate or redundant
        pages. A card sort was conducted with users to dictate how the new
        structure could work.
      </P>
      <img src={ucasImg} />
    </>,
    <>
      <H3>User considerations</H3>
      <P>
        Content here was mainly aimed towards prospective university students
        but was used by parents, teachers and higher education providers as
        well, all of whom had slightly different goals.
      </P>
      <P>
        Considerations were also paid to staff as we wanted to make sure the
        content was easier to maintain and there were more tools to use when
        creating/ updating areas of the site.
      </P>
      <img src={ucasImg} />
    </>,
    <>
      <H3>Challenges</H3>
      <P>
        The hierarchy of the page included 700~ pages of content which staff
        found hard to read - let alone the end users. We could cull a lot of
        that content due to card sorting exercises and analytics telling us
        which pages weren’t being used but making sure the many other pages
        which stayed all worked with the new templates
      </P>
      <P>
        New requirements such as advertising space posed throughout the project.
      </P>
    </>,
    <>
      <H3>Outcomes</H3>
      <P>Implemented a feedack button in the footer</P>
      <P>Testing with users was positive</P>
      <P>Content easier to create and maintain for staff</P>
      <P>Reflective of the rest of the UCAS estate</P>
      <P>
        Some areas for improvement after launch such as the ‘explore section’
        button on pages not being visible,
      </P>
    </>,
  ],
}

const UcasPage = () => {
  return (
    <Layout>
      <SEO title="Ucas UX" />
      <CaseStudy content={content} />
      <Button to="/work">See more work</Button>
    </Layout>
  )
}

export default UcasPage
