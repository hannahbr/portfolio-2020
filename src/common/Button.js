import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  border: none;
  border-radius: 5px;
  background: rgba(27, 27, 27, 0.04);
  padding: ${({ theme }) => theme.spacing[0]};
  margin: 0 auto ${({ theme }) => theme.spacing[2]} auto;
  color: black;
  text-decoration: none;
`

export default Button
