import React from "react"

import TransactionHeader from "../TransactionSectionHeader"
import TransactionTable from "../../molecules/TransactionTable"
import TransactionContainer from "./style"

function TransactionSection() {
  return (
    <TransactionContainer>
      <TransactionHeader />
      <TransactionTable />
    </TransactionContainer>
  )
}

export default TransactionSection
