import React from "react"

import { RowContainer, RowValue } from "./styled"

function TransactionRow() {
  return (
    <RowContainer>
      <RowValue>Cash In</RowValue>
      <RowValue>R$ 22,00</RowValue>
      <RowValue>22/11/2022</RowValue>
      <RowValue>753d51c4-7b78-431e-a56c-d196bd55d9be</RowValue>
    </RowContainer>
  )
}

export default TransactionRow
