import React from "react"
import { H3, P } from "./typography"
import styled from "styled-components"

const RolesCard = styled.section`
  background: ${({ theme }) => theme.colours.secondary2};
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.42);
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};

  /* @media only screen and (max-width: 943px) {
    padding: ${({ theme }) =>
    theme.spacing[3]}
      ${({ theme }) =>
    theme
      .spacing[5]};
  }

  @media only screen and (max-width: 576px) {
    padding: ${({
    theme,
  }) => theme.spacing[2]}
      ${({ theme }) => theme.spacing[0]};
  } */
`

const Dates = styled(P)`
  color: ${({ theme }) => theme.colours.secondary3};
  padding: 0;
  margin: 0;
`

const CompanyName = styled(H3)`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing[0]};
`

const EmploymentArticle = styled.article`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const EmploymentCard = ({ dates, company, children }) => {
  return (
    <EmploymentArticle>
      <Dates small>{dates}</Dates>
      <CompanyName>{company}</CompanyName>
      <RolesCard>{children}</RolesCard>
    </EmploymentArticle>
  )
}

export default EmploymentCard
