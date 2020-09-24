import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.desktop};
  margin: auto;

  @media only screen and (max-width: ${({ theme }) => theme.tabletBP}) {
    max-width: 95vw;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobileBP}) {
    max-width: ${({ theme, breakout }) =>
      breakout ? "100vw" : theme.maxWidth.mobile};
  }

  ${({ direction }) => {
    if (direction === "row")
      return `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      `
    else if (direction === "column")
      return `
      display: flex;
      flex-direction: column;
      justify-content: center;
      `
    else return null
  }}
`

export default ContentWrapper
