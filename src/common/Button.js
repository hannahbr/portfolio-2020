import styled from "styled-components"

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: rgba(27, 27, 27, 0.04);
  padding: ${({ theme }) => theme.spacing[0]};
  margin: ${({ theme }) => theme.spacing[2]} auto;
`

export default Button
