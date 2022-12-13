import styled from "styled-components"
import colors from "../../../shared/styles/styleVars"

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

export const Icons = styled.span`
  bottom: 4.5px;
  left: 8px;
  position: absolute;
  background: none;
  border: none;
  cursor: ${(props) => (props.theme ? props.theme : "none")};
`
