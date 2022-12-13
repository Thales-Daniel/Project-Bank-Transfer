import styled from "styled-components"
import { Link } from "react-router-dom"

import colors from "../../../shared/styles/styleVars"

export const GoToLogin = styled.div`
  font-size: medium;
  color: ${colors.gray};
`
export const LinkLogin = styled(Link)`
  background-color: none;
  text-decoration: none;
  border: none;
  color: ${colors["black-not-strong"]};
`
