import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { SocialWrapper } from "../components/footer"
import { A, P } from "../common/typography"
import { colours } from "../themes"

const Wrapper404 = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const DarkA = styled(A)`
  color: black;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper404>
      <h1>404: Not Found</h1>
      <P>
        Woops! You'd better drop me a line and we can discuss it in the
        interview ;)
      </P>
      <SocialWrapper>
        <svg
          width="25"
          height="25"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0V0ZM12.3333 10.3333C12.3333 10.5985 12.228 10.8529 12.0404 11.0404C11.8529 11.228 11.5986 11.3333 11.3333 11.3333H4.66667C4.40145 11.3333 4.1471 11.228 3.95956 11.0404C3.77203 10.8529 3.66667 10.5985 3.66667 10.3333V7.174C3.66649 7.14421 3.67433 7.11493 3.68936 7.08922C3.7044 7.0635 3.72607 7.04231 3.75212 7.02785C3.77816 7.0134 3.80761 7.00622 3.83739 7.00707C3.86716 7.00791 3.89616 7.01676 3.92134 7.03267L7.20467 9.08467C7.44337 9.23284 7.71872 9.31136 7.99967 9.31136C8.28062 9.31136 8.55598 9.23284 8.79467 9.08467L12.078 7.03267C12.1032 7.01676 12.1322 7.00793 12.162 7.00711C12.1918 7.00629 12.2213 7.0135 12.2473 7.028C12.2734 7.04248 12.2951 7.06364 12.3102 7.08931C12.3253 7.11498 12.3333 7.14421 12.3333 7.174V10.3333ZM12.31 5.70867L8.26667 8.23667C8.1871 8.28603 8.09531 8.31219 8.00167 8.31219C7.90803 8.31219 7.81624 8.28603 7.73667 8.23667L3.69267 5.70867C3.68498 5.70462 3.67852 5.6986 3.67395 5.69121C3.66937 5.68382 3.66686 5.67535 3.66667 5.66667C3.66667 5.40145 3.77203 5.1471 3.95956 4.95956C4.1471 4.77202 4.40145 4.66667 4.66667 4.66667H11.3333C11.5986 4.66667 11.8529 4.77202 12.0404 4.95956C12.228 5.1471 12.3333 5.40145 12.3333 5.66667C12.3335 5.6748 12.3317 5.68286 12.3281 5.69016C12.3245 5.69746 12.3192 5.7038 12.3127 5.70867H12.31Z"
            fill={colours.primary2}
          />
        </svg>
        <DarkA>braybrookhannah@gmail.com</DarkA>
      </SocialWrapper>
    </Wrapper404>
  </Layout>
)

export default NotFoundPage
