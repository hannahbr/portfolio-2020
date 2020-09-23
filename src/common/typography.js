import styled from "styled-components"

export const H1 = styled.h1`
  color: ${({theme, darkBg}) => darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-size: 42px;
`

export const H2 = styled.h2`
color: ${({theme, darkBg}) => darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-size: 37px;
`
export const H3 = styled.h3`
color: ${({theme, darkBg}) => darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-size: 25px;
`
export const H4 = styled.h4`
color: ${({theme, darkBg}) => darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-size: 22px;
`
export const P = styled.p`
color: ${({theme, darkBg}) => darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-size: ${({small}) => small ? '16px': "18px"};
`

export const A = styled.a`
  text-decoration: none;
  border-bottom: 3px solid ${({theme}) => theme.colours.primary1}
`
