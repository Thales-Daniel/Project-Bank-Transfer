import React from "react"

import RowTypes from "../../shared/types/RowTypes"
import { RowContainer, RowValue } from "./styled"

function TransactionRow({ value, date, operation, id }: RowTypes) {
  return (
    <RowContainer>
      <RowValue>{value}</RowValue>
      <RowValue>{date}</RowValue>
      <RowValue>{operation}</RowValue>
      <RowValue>{id}</RowValue>
    </RowContainer>
  )
}

export default TransactionRow
