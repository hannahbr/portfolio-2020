import React from "react"
import CaseStudy from "../../components/CaseStudy"
import { H3, P } from "../../common/typography"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import ucasImg from "../../images/ucas.png"
import Button from "../../common/Button"
import Img from "../../common/Img"

const content = {
  companyName: "International Animal Rescue",
  conducted: "2019",
  time: "2 months",
  contributions: "design, research, development",
  description: "Website redevelopment",
  tags: ["design", "development", "short-term"],
  heroImg: "ucas.png",
  heroImgAlt: "International animal rescue home page design",
  projectGoal: {
    image: "ucas.png",
    description: (
      <P>
        With a low budget, International Animal rescue wanted to improve the
        user experience of their website alongside an updated brand and
        migration of content to a new version of Drupal.
      </P>
    ),
  },
  sections: [
    <>
      <H3>Delivery</H3>
      <P>
        We conducted an initial 2 day discovery workshop with the client at
        their offices. Initially we interviewed stakeholders to get an idea of
        existing knowledge, and reviewed competitor websites to be used as a
        jumping off point for further discussion and ideation. We then ran
        ideation workshops, utilising Crazy-8s and art galleries covering the 3
        main areas that IAR wanted to get better at.
      </P>
      <P>
        To get user input we put a hotjar poll on the site, in order to get some
        benchmarking data for the future, and some open ended questions for
        qualitative data. Along with a GA analysis we looked at a bunch of heat
        maps and recordings.
      </P>
      <P>
        From the stakeholder workshops we found that the previous site was not
        adaptable enough for the new content which IAR creates. As they’re a
        fantastic charity who are always striving to really drive change and
        improvement in the animal welfare space, their site did not keep up with
        their new and evolving projects.
      </P>
      <P>
        We found that generally users have a very positive view of IAR, and
        there were just a few issues that users found with the site such as not
        working properly in certain devices/ browsers and payment issues meaning
        that some users couldn’t donate.
      </P>
      <P>
        Due to budget constraints we could only provide one persona which we
        based on their main audience group, provided a template format that
        could be edited in Google slides and provided support for creating
        others.
      </P>
      <P>
        We also provided a high level sitemap recommendation (2 levels of
        hierarchy) along with a content audit template so that going forward new
        content could be optimised for SEO and ensure high quality.
      </P>
      <P>
        Alongside this I also wireframed, designed, tested and implemented
        improvements for the actual course pages. This included improving the
        information hierarchy, visual style and ease of use.
      </P>
      <P>
        We created wireframes of key pages in the user journey using findings
        from our research, the home page, a donation page and a project page. We
        also worked with developers and provided advice when needed on other
        pages as they were developed.
      </P>

      <Img src={ucasImg} alt="" />
      <Img src={ucasImg} alt="" />
    </>,
    <>
      <H3>User considerations</H3>
      <P>xx</P>
      <Img src={ucasImg} alt="" />
    </>,
    <>
      <H3>Challenges</H3>
      <P>
        The limited budget meant that we couldn’t do as much as would have been
        preferred in terms of wireframing or research; for example we didn’t
        have time to complete a donation or purchase journey, or budget to
        validate the wires/ sitemap before going onto development.
      </P>
    </>,
    <>
      <H3>Outcomes</H3>
      <P>
        Development is currently nearing completion so the site should be live
        at some point in the near future, where we can properly assess success
        and continue to implement improvements as and when needed.
      </P>
      <Img src={ucasImg} alt="" />
      <Img src={ucasImg} alt="" />
      <Img src={ucasImg} alt="" />
      <Img src={ucasImg} alt="" />
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
