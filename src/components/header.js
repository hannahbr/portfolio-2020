import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import ContentWrapper from "../common/ContentWrapper"
import Logo from "../common/Logo"
import { P } from "../common/typography"

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colours.primary3};
  border-top: 6px solid ${({ theme }) => theme.colours.primary1};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[0]};
  position: sticky;
  top: 0;
  z-index: 999;
`

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colours.secondary2};
  margin-left: ${({ theme }) => theme.spacing[2]};
  border-bottom: 0px solid #0cecb7;
  transition: 0.1s;

  &:hover {
    border-bottom: 3px solid #0cecb7;
  }
`

const StyledP = styled(P)`
  opacity: 0.6;
  color: ${({ theme }) => theme.colours.secondary2};
  margin: 0 0 0 0.5rem;
  line-height: 1.2em;
  @media only screen and (max-width: ${({ theme }) => theme.mobileBP}) {
    display: none;
    width: 0;
  }
`

const Header = ({ siteTitle, path }) => {
  return (
    <StyledHeader>
      <ContentWrapper direction="row">
        <HomeLink to="/">
          <Logo />
          <StyledP>
            Hannah
            <br />
            Braybrook
          </StyledP>
        </HomeLink>
        <nav>
          <NavLink
            to="/work"
            activeStyle={{ borderBottom: "3px solid #0cecb7" }}
            partiallyActive={true}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{ borderBottom: "3px solid #0cecb7" }}
            partiallyActive={true}
          >
            About
          </NavLink>
        </nav>
      </ContentWrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
