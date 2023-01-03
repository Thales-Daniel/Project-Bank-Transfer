import React from "react"

import { TypeHeaderP, TableHeader } from "./style"

function TransactionTableHeader() {
  return (
    <TableHeader>
      <TypeHeaderP>Value</TypeHeaderP>
      <TypeHeaderP>Date</TypeHeaderP>
      <TypeHeaderP>Type</TypeHeaderP>
      <TypeHeaderP>Name</TypeHeaderP>
    </TableHeader>
  )
}

export default TransactionTableHeader
