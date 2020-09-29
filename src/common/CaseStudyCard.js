import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Tags from "./Tags"
import { H4, P } from "./typography"

const StyledArticle = styled.article`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.42);
  border-radius: 5px;
  height: 13rem;
  margin-top: ${({ theme }) => theme.spacing[2]};
  overflow: hidden;
  display: flex;
  background: ${({ theme }) => theme.colours.secondary2};

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.22);
    transform: translate(0, -5px);
    & div {
      & div {
        & div {
          background: ${({ theme }) => theme.colours.primary2};
        }
      }
    }
  }

  transition: 0.5s;

  @media only screen and (max-width: ${({ theme }) => theme.mobileBP}) {
    min-width: 300px;
    height: auto;
    flex-direction: column;
    margin-left: ${({ theme }) => theme.spacing[1]};
  }
`

const CardImg = styled.img`
  margin: 0;
`

const CardInfo = styled.div`
  padding: ${({ theme }) => theme.spacing[1]};
  margin: auto 0;
`

const WorkLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const CaseStudyCard = ({
  caseStudy: { title, endpoint, description, tags, imageName },
}) => {
  let image
  if (imageName) {
    image = require(`../images/${imageName}`)
  }
  return (
    <WorkLink to={`/work/${endpoint}`}>
      <StyledArticle>
        {imageName && <CardImg src={image} />}
        <CardInfo>
          <H4>{title}</H4>
          <P>{description}</P>
          <Tags tags={tags} />
        </CardInfo>
      </StyledArticle>
    </WorkLink>
  )
}

export default CaseStudyCard
