import React from "react"
import styled from "styled-components"

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CardTag = styled.div`
  border-radius: 2em;
  padding: 3px 15px;
  margin: 0 ${({ theme }) => theme.spacing[0]}
    ${({ theme }) => theme.spacing[0]} 0;
  background-color: ${({ theme }) => theme.colours.primary2};
  opacity: 0.5;
  transition: 0.5s;
`

const Text = styled.p`
  margin: 0;
  padding: 0;
  opacity: 1;
`

const Tags = ({ tags }) => {
  return (
    <TagsContainer>
      {tags.map((tag, i) => (
        <CardTag key={i}>{<Text>{tag}</Text>}</CardTag>
      ))}
    </TagsContainer>
  )
}

export default Tags
