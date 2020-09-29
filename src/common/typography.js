import styled from "styled-components"

export const H1 = styled.h1`
  color: ${({ theme, darkBg }) =>
    darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-family: "OpenSans";
`

export const H2 = styled.h2`
  color: ${({ theme, darkBg }) =>
    darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-family: "OpenSans";
`
export const H3 = styled.h3`
  color: ${({ theme, darkBg }) =>
    darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-family: "OpenSans";
  font-size: ${({ theme }) => theme.fontSizes[3]};
  margin: ${({ theme }) => theme.spacing[1]} 0;
`
export const H4 = styled.h4`
  color: ${({ theme, darkBg }) =>
    darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-family: "OpenSans";
`
export const P = styled.p`
  color: ${({ theme, darkBg }) =>
    darkBg ? theme.colours.secondary2 : theme.colours.secondary1};
  font-family: "OpenSans";
  font-size: ${({ small, theme }) =>
    small ? theme.fontSizes[0] : theme.fontSizes[1]};
`

export const A = styled.a`
  text-decoration: none;
  font-family: "OpenSans";
  color: ${({ theme, lightBg = false }) =>
    lightBg ? "black" : theme.colours.secondary2};
  border-bottom: 3px solid ${({ theme }) => theme.colours.primary1};
`
