import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1, H2, H3, P } from "../common/typography"

const Colour = styled.div`
  padding: 2rem;
`

const Primary = styled(Colour)`
  background: ${({ theme }) => theme.colours.primary1};
`

const Primary2 = styled(Colour)`
  background: ${({ theme }) => theme.colours.primary2};
`
const Primary3 = styled(Colour)`
  background: ${({ theme }) => theme.colours.primary3};
`

const Secondary = styled(Colour)`
  background: ${({ theme }) => theme.colours.secondary1};
`

const PrimaryCta = styled.button`
  background: ${({ theme }) => theme.colours.primaryCta};
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 2em;
  margin: 1rem;
`

const SecondaryCta = styled.button`
  background: ${({ theme }) => theme.colours.secondaryCta};
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 2em;
  margin: 1rem;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1>H1 Hannah Braybrook</H1>
      <H2>H2 Douglas Hellowell</H2>
      <H3>H3 Jojo and DIO</H3>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis
        dolores commodi, suscipit adipisci incidunt labore cumque dolore
        perspiciatis perferendis obcaecati, id omnis! Suscipit praesentium
        magnam delectus vero ad sit!
      </P>
      <Primary>Primary 1</Primary>
      <Primary2>Primary 2</Primary2>
      <Primary3>Primary 3</Primary3>
      <Secondary>Secondary</Secondary>
      <PrimaryCta>Primary Cta</PrimaryCta>
      <SecondaryCta>Secondary Cta</SecondaryCta>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
