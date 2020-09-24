import React from "react"
import { H3, H4, P } from "./typography"
import styled from "styled-components"

const RolesCard = styled.section`
  background: ${({ theme }) => theme.colours.secondary2};
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.42);
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
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
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

const EmploymentCard = ({ employment }) => {
  return (
    <EmploymentArticle>
      <Dates small>{employment.dates}</Dates>
      <CompanyName>{employment.company}</CompanyName>
      <RolesCard>
        {employment.roles.map(role => {
          return (
            <>
              <H4>{role.jobTitle}</H4>
              {role.description.map(paragraph => {
                return <P>{paragraph}</P>
              })}
            </>
          )
        })}
      </RolesCard>
    </EmploymentArticle>
  )
}

export default EmploymentCard
