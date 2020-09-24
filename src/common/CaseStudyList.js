import React from "react"
import styled from "styled-components"
import caseStudies from "../data/case-studies.json"
import CaseStudyCard from "./CaseStudyCard"

const Wrapper = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.mobileBP}) {
    display: flex;
    overflow-x: scroll;
    padding-bottom: 1rem;
  }
`

const CaroselPadding = styled.div`
  min-width: 0;

  @media only screen and (max-width: ${({ theme }) => theme.mobileBP}) {
    min-width: 1.5rem;
  }
`

const CaseStudyList = () => {
  return (
    <Wrapper>
      {caseStudies.map((caseStudy, i) => {
        return <CaseStudyCard caseStudy={caseStudy} key={i} />
      })}
      <CaroselPadding />
    </Wrapper>
  )
}

export default CaseStudyList
