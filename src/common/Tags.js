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
  background-color: ${({ theme, noFade, dark }) =>
    dark
      ? theme.colours.primary3
      : noFade
      ? theme.colours.primary2
      : theme.colours.primary2Fade};
  transition: 0.5s;
`

const Text = styled.p`
  ${({ theme, dark }) => dark && `color: ${theme.colours.secondary2}`};
  margin: 0;
  padding: 0;
  opacity: 1;
`

const Tags = ({ tags, noFade, dark }) => {
  console.log(tags, noFade, dark)
  return (
    <TagsContainer>
      {tags.map((tag, i) => (
        <CardTag key={i} noFade={noFade} dark={dark}>
          {<Text dark={dark}>{tag}</Text>}
        </CardTag>
      ))}
    </TagsContainer>
  )
}

export default Tags
