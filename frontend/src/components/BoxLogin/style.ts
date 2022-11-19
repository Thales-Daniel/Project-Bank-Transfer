import styled from "styled-components"
import { Link } from "react-router-dom"

import colors from "../../shared/styles/styleVars"

export const BoxContainer = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: space-evenly;
  width: 19rem;
`

export const BoxContainerTitle = styled.h1``

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const FildTitle = styled.p`
  font-size: small;
  margin-left: 10px;
`

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${colors["gray-border"]};
  height: 2.2rem;
  outline: none;
  padding: 2px 10px 2px 30px;
  position: relative;
  width: 15rem;
`

export const Icons = styled.span`
  bottom: 3px;
  left: 8px;
  position: absolute;
  background: none;
  border: none;
  cursor: ${(props) => (props.theme ? props.theme : "none")};
`

export const LoginButton = styled.button`
  align-items: center;
  background-color: ${colors["black-not-strong"]};
  border-radius: 10px;
  border: none;
  color: ${colors.white};
  display: flex;
  height: 2.2rem;
  justify-content: center;
  width: 15rem;
`
export const SignUpContainer = styled.div`
  font-size: small;
  color: ${colors.gray};
`
export const LinkSingUp = styled(Link)`
  background-color: none;
  text-decoration: none;
  border: none;
  color: ${colors["black-not-strong"]};
`
