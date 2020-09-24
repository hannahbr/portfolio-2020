import React from "react"
import { H2 } from "./typography"
import ContentWrapper from "../common/ContentWrapper"
import EmploymentCard from "./EmploymentCard"
import employmentData from "../data/employment.json"

import styled from "styled-components"

const EmploymentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[1]};
`

const EmploymentList = () => {
  return (
    <ContentWrapper>
      <H2>Employment</H2>
      <EmploymentWrapper>
        {employmentData.map(employment => {
          return <EmploymentCard employment={employment} />
        })}
      </EmploymentWrapper>
    </ContentWrapper>
  )
}

export default EmploymentList
