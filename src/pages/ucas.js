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
  time: "9 months",
  contributions: "design, research, development",
  description: "Website redevelopment",
  tags: ["design", "development", "long-term"],
  heroImg: "ucas.png",
  heroImgAlt: "Ucas Course search",
  projectGoal: {
    image: "ucas.png",
    description: (
      <P>
        One of the common criticisms we got in terms of user feedback was that the information and advice and course search sections of the site were confusing to use. Our team committed to focussing on this section of the website for a period to fix some key issues we had identified. For this job my responsibilities were principally design and development, offering support for research.
      </P>
    ),
  },
  sections: [
    <>
      <H3>Delivery</H3>
      <P>
      Before beginning, we had a wealth of knowledge to parse from product owners interacting with students and uni staff, previous feedback from students gathered through the website, and data from things like Hotjar and Google Analytics. During this research we found a few key recurring factors.
      </P>
      <ul>
        <li>The language used was not friendly for prospective students.</li>
        <li>We currently had two search functions; the main course search and the information and advice are. This was split into two different areas as each was created and maintained by separate dev teams. Due to ambiguous labelling, this lead to students using the wrong search and not being able to find what they needed.</li>
        <li>There was currently too much content for students to sift through and were missing important articles and areas of the site. It was getting cluttered and difficult to parse the information as there was no periodic content review process.</li>
      </ul>
      <P>
      Using wireframes provided by another member of the team, I created high fidelity mockups up of the home page which took into account the improved information hierarchy.
      </P>
      <img src={ucasImg} />
      <P>
      I designed alternate improvements to the general textual content on the website in order to make it easier to read - it hadn’t been updated by any UX or UI specialist since it’s implementation. 
      </P>
      <P>
      There were standard changes such as ensuring a minimum font size, max line widths, passable colour contrasts, and clear distinctions between regular text and links. I also overhauled the way buttons were being used, and added new formats as there weren’t enough options for our editors which resulted in an overuse of CTAs.
      </P>
      <img src={ucasImg} />
      <P>
      As developments from colleagues in other teams caught up we released a ‘joined up’ search. This enabled us to connect the different searches between the two development teams, which was a big problem for users.
      </P> 
      <P>
        During this time I worked with the development team in charge of the course search to wireframe, test and implement iterative improvements to the main course search results pages. Improvements included things like grouping universities and courses, improving the labelling, help text and order of filters, ensuring the design isn’t overwhelming for the user. 
        </P>
      <P>
        Alongside this I also wireframed, designed, tested and implemented improvements for the actual course pages. This included improving the information hierarchy, visual style and ease of use.
      </P>
      <img src={ucasImg} />
      <P>
        These improvements were achieved over a long period of time in chunks rather than in one go so we could assess the success of each change and see if it was indeed an improvement.
      </P>
      <img src={ucasImg} />
      <img src={ucasImg} />
      <P>
      As we completed each of these stages we wanted to validate with users in person alongside our usual analysis of analytics and online feedback. We showed the website to prospective students at a UCAS event and gave them a random task to complete in return for some chocolates. We also managed to organise a few school visits to conduct some 1-1 testing with A level students.
      </P>
      <img src={ucasImg} />
    </>,
    <>
      <H3>User considerations</H3>
      <P>
      The use groups we focussed on for this work was towards prospective uni students (home and international) who would be using the site to find out how to apply and look for courses. This ranges from the typical 16 - 17 year old looking to go to uni after college or sixth form, to mature students of any age looking for postgraduate courses. 
      </P>
      <P>      
      We also factored in university staff as an important user group, who rely on UCAS to display their course and uni information and offer a way to apply to their courses. Other audiences to think about were the parents of students, advertisers, teachers, and internal staff.
      </P>
      <P>
        Considerations were also paid to staff as we wanted to make sure the
        content was easier to maintain and there were more tools to use when
        creating/ updating areas of the site.
      </P>
    </>,
    <>
      <H3>Challenges</H3>
      <P>
      There was a political balancing act to the course search, and a positive UX change for students viewing courses could result in a negative results for unis, with their course appearing in a less opportune place for them (eg. Trying to implement a relevancy results return rather than alphabetical).
      </P>
      <P>
      Content being able to to user inputted meant lots of existing content could not be changed in any way that would need substantial changes to the existing data, particularly the course detail pages.
      </P>
      <P>
      Working with multiple separate dev teams, to bring their work together. It would have been significantly easier to gain more buy-in had we more research budget/ time; which was unfortunately not the case in this instance.
      </P>
    </>,
    <>
      <H3>Outcomes</H3>
      <P>
        All of the iterative improvements such as changing the UI, wording and combining the searches resulted in a massive reduction in negative feedback from our end users through the website, where it used to be one of UCAS’ most frequent complaints in feedback.
      </P>
      <img src={ucasImg} />
      <img src={ucasImg} />
      <img src={ucasImg} />
      <img src={ucasImg} />
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
