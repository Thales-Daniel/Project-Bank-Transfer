import styled from "styled-components"
import { Link } from "react-router-dom"

import colors from "../../../shared/styles/styleVars"

export const SignUpContainer = styled.div`
  font-size: medium;
  color: ${colors.gray};
`
export const LinkSingUp = styled(Link)`
  background-color: none;
  text-decoration: none;
  border: none;
  color: ${colors["black-not-strong"]};
`
