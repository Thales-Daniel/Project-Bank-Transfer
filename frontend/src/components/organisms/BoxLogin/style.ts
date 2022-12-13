import styled from "styled-components"

import colors from "../../../shared/styles/styleVars"

export const BoxContainer = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: space-evenly;
  width: 25rem;
`

export const BoxContainerTitle = styled.h1``

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const FildTitle = styled.p`
  font-size: medium;
  margin-left: 10px;
`

export const InputPassword = styled.input`
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => (props.color ? colors[props.color] : "red")};
  height: 2.5rem;
  outline: none;
  padding: 2px 10px 2px 30px;
  position: relative;
  width: 20rem;
`

export const InputLogin = styled.input`
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => (props.color ? colors[props.color] : "red")};
  height: 2.5rem;
  outline: none;
  padding: 2px 10px 2px 30px;
  position: relative;
  width: 20rem;
`

export const Icons = styled.span`
  bottom: 4.5px;
  left: 8px;
  position: absolute;
  background: none;
  border: none;
  cursor: ${(props) => (props.theme ? props.theme : "none")};
`

export const LoginButton = styled.button`
  background-color: ${colors["black-not-strong"]};
  border-radius: 10px;
  border: none;
  font-size: medium;
  color: ${colors.white};
  cursor: pointer;
  height: 2.5rem;
  width: 20rem;
`
