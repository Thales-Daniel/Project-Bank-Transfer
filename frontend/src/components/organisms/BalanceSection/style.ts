import styled from "styled-components"
import colors from "../../../shared/styles/styleVars"

export const SectionBalance = styled.section`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  height: 20rem;
  justify-content: flex-start;
  padding: 10px;
  width: 30%;

  @media (max-width: 600px) {
    width: 100%;
    height: 10rem;
    p {
      font-size: xx-large;
    }
  }
`

export const AccountBalance = styled.p`
  align-items: center;
  border-bottom: solid ${colors["black-not-strong"]} 1px;
  display: flex;
  font-size: 2.5vw;
  gap: 10px;
  justify-content: center;
  text-align: center;
  width: 70%;
`

export const BalanceValue = styled.p`
  font-size: 4vw;
`
