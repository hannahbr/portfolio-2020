import React from "react"
import CaseStudy, { SectionContainer } from "../../components/CaseStudy"
import { H3, P } from "../../common/typography"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { ImgModal, ImgWrapper } from "../../common/Img"

const content = {
  companyName: "Durham University",
  conducted: "2019 - 2020",
  time: "6 months",
  contributions: "research, design",
  description: "Website research and redevelopment",
  tags: ["design", "research", "long-term"],
  heroImg: "dur-main.png",
  heroImgAlt: "Durham home page",
  projectGoal: {
    image: "dur-goal.png",
    description: (
      <P>
        Durham uni’s website was overdue for an upgrade, and CTI was brought on
        to redesign with a user-centered focus after discovering what users
        really needed from the site, and develop the front end to hand over to a
        development agency to built the back end CMS.
      </P>
    ),
  },
  sections: [
    <>
      <SectionContainer>
        <H3>Delivery</H3>
        <P>
          This was a fantastic project in that we were able to commit to a
          pretty comprehensive research phase before starting to define
          solutions.
        </P>
        <ul>
          <li>GA Audit (completed by our head strategist)</li>
          <li>UX audit</li>
          <li>Competitor analysis (5x)</li>
          <li>Stakeholder interviews/ workshops (12x)</li>
          <li>
            Guerrilla research (1 day spent at Durham, talking to staff and
            students)
          </li>
          <li>Tree testing</li>
        </ul>
      </SectionContainer>
      <ImgWrapper>
        <ImgModal
          small={"dur-testing-tn.png"}
          large={"dur-testing.png"}
          alt="A colleague and I in the process of conducting guerilla research"
        />
      </ImgWrapper>
      <SectionContainer>
        <P>
          Through these activities we found out about frustrating or inefficient
          areas of their current website, behaviours and journeys of the user
          groups that would interact with the website, and the general
          perception of Durham for prospective students. Using this information,
          we synthesised our findings and delivered:
        </P>
        <ul>
          <li>User personas (8x)</li>
          <li>User journeys (8x)</li>
        </ul>
      </SectionContainer>
      <ImgWrapper>
        <ImgModal
          small={"dur-postit-tn.png"}
          large={"dur-postit.png"}
          alt="Some of the findings collated - there were a lot of post-its and another wall!"
        />
        <ImgModal
          small={"dur-persona-tn.png"}
          large={"dur-persona.png"}
          alt="The final personas and user journeys"
        />
      </ImgWrapper>
      <SectionContainer>
        <P>Below is an example of a few of our findings:</P>
        <ul>
          <li>
            There are some negative perceptions of Durham as a university which
            could be helped by displaying a more diverse, inclusive view from
            the new website.
          </li>
          <li>
            Conflicting opinions throughout the uni on what should be
            prioritised as content, resulting in overwhelming page structures.
          </li>
          <li>
            There needs to be a much greater focus on mobile for the future
            website, as many students use their mobiles to research prospective
            unis.
          </li>
        </ul>
        <P>
          After delivering this and ensuring that we understood the motivations,
          frustrations and journeys of key user groups we moved onto wireframing
          by running 6x 1 week sprints; delivering new wireframes and page
          tables each week, which gave the busy team at Durham time to properly
          circulate and sign off.
        </P>
        <ul>
          <li>Page tables (completed by our content strategist)</li>
          <li>Content strategy (completed by our content strategist)</li>
          <li>Sitemap recommendation</li>
          <li>Desktop & mobile wireframes (18x)</li>
          <li>
            Interactive prototype (Created and presented by another member of my
            team)
          </li>
          <li>
            High fidelity designs & style tiles (2x, completed by our designer)
          </li>
        </ul>
      </SectionContainer>
      <ImgWrapper>
        <ImgModal
          small={"dur-wire-tn.png"}
          large={"dur-wire.png"}
          alt="Wireframe of potential autocomplete functionality"
        />
        <ImgModal
          small={"dur-sitemap-tn.png"}
          large={"dur-sitemap.png"}
          alt="View of the recommended sitemap created"
        />
      </ImgWrapper>
      <SectionContainer>
        <P>
          Once we’d presented all of this to Durham and ensured it all worked
          for them and for the developers we did some more research to validate
          our work.
        </P>
        <ul>
          <li>First click testing</li>
          <li>Tree testing</li>
          <li>
            Lab testing (with 5x users, using eye tracking technology. The
            testing was conducted by another member of my team; I helped set up,
            plan, took notes and ensured all was running smoothly.)
          </li>
        </ul>
      </SectionContainer>
      <ImgWrapper>
        <ImgModal
          small={"dur-heatmap-tn.png"}
          large={"dur-heatmap.png"}
          alt="Heatmap view of first click testing on the home page"
        />
        <ImgModal
          small={"dur-lab-test-tn.png"}
          large={"dur-lab-test.png"}
          alt="An image of me testing with a user in our UX lab"
        />
      </ImgWrapper>
      <SectionContainer>
        <H3>User considerations</H3>
        <P>
          Main focus was for prospective Durham students, however the site is
          also used by a variety of other audiences, such as current students,
          staff/ academics and media.
        </P>
        <H3>Challenges</H3>
        <P>
          COVID meant we couldn’t test throughout the creation of the wireframes
          and prototypes. This meant we couldn’t do lab testing before the front
          end had already been developed to a substantial degree.
        </P>
        <P>
          It’s quite hard to get in touch with students at certain points in the
          year, so there was a challenge to finding participants for testing.
          For example, the guerrilla research was never part of the initial plan
          and we had to improvise on the day as no students had been able to be
          recruited for interviews and testing.
        </P>
        <H3>Outcomes</H3>
        <P>
          Despite the setbacks of COVID, the testing of the site went very well
          and we’re currently working with Durham and another development agency
          to create the backend CMS and bring in our modular front end content.
          The site will be going live at some point in the near future!
        </P>
      </SectionContainer>
      <ImgWrapper>
        <ImgModal
          small={"dur-final-tn.png"}
          large={"dur-final.png"}
          alt="Renders of the final home page in high fidelity"
        />
      </ImgWrapper>
    </>,
  ],
}

const DurhamPage = () => {
  return (
    <Layout>
      <SEO title="Durham" />
      <CaseStudy content={content} />
    </Layout>
  )
}

export default DurhamPage
