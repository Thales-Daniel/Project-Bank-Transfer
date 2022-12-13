import styled from "styled-components"

import colors from "../../../shared/styles/styleVars"

export const Header = styled.header`
  align-items: center;
  border-bottom: solid ${colors["black-not-strong"]} 1px;
  display: flex;
  font-size: 2.5vw;
  justify-content: flex-start;
  text-align: center;
  width: 95%;
  margin-bottom: 10px;
`
export const FilterTransactionButton = styled.button`
  background-color: ${(props) =>
    props.theme === "activy" ? colors.whitesmoke : colors.white};
  border-radius: 5px 5px 0 0;
  padding: 5px 60px 5px 15px;
  border: none;
  border-right: 1px solid ${colors["gray-border"]};
  font-size: 2.5vw;
  cursor: pointer;
`

export const DateFilter = styled.input`
  font-size: 2.3vw;
  outline: none;
  border: none;
  padding-left: 15px;
`
