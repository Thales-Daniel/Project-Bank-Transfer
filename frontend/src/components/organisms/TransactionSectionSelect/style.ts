import styled from "styled-components"

import colors from "../../../shared/styles/styleVars"

export const TransactionSelectContainer = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  gap: 0.3125rem;
`

export const TypeTransactionSelect = styled.select`
  border-radius: 0.5rem;
  border: 1px solid ${colors["gray-border"]};
  font-size: x-large;
  text-align: center;
  background-color: ${colors.white};
  width: 100%;
`

export const SelectOption = styled.option``

export const DateTypeInput = styled.input`
  border-radius: 0.5rem;
  border: 1px solid ${colors["gray-border"]};
  font-size: x-large;
  margin-bottom: 1.25rem;
  text-align: center;
`
