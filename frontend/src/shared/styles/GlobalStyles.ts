import styled, { createGlobalStyle } from "styled-components"
import colors from "../styles/styleVars"

const GlobalStyle = createGlobalStyle`

  * {
    font-family: "Saira", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export const ErrorComponent = styled.p`
  color: ${colors.red};
  font-size: small;
`

export const SucessComponent = styled.p`
  color: ${colors.green};
  font-size: small;
`

export default GlobalStyle
