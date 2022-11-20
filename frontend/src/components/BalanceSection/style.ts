import styled from "styled-components"
import colors from "../../shared/styles/styleVars"

export const SectionBalance = styled.section`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  height: 15rem;
  justify-content: flex-start;
  padding: 10px;
  width: 30%;
`

export const AccountBalance = styled.p`
  align-items: center;
  border-bottom: solid ${colors["black-not-strong"]} 1px;
  display: flex;
  font-size: xx-large;
  gap: 10px;
  justify-content: center;
  text-align: center;
  width: 70%;
`

export const BalanceValue = styled.p`
  font-size: xx-large;
`
