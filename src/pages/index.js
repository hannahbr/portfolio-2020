import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Button = styled.button`
  background: red;
  border: 1px solid black;
  padding: 0.5rem;
`

const IndexPage = () => {
  const [num, setNum] = useState(0)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>New Site coming soon...</h1>
      <Button
        onClick={() => {
          setNum(prevNum => prevNum + 1)
        }}
      >
        click me
      </Button>
      <p>{num}</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
