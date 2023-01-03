import React from "react"

import TransactionHeader from "../TransactionSectionHeader"
import TransactionTable from "../../molecules/TransactionTable"
import TransactionContainer from "./style"
import TransactionSectionSelect from "../TransactionSectionSelect"

function TransactionSection() {
  const width = window.innerWidth

  return (
    <TransactionContainer>
      {width < 900 ? <TransactionSectionSelect /> : <TransactionHeader />}
      <TransactionTable />
    </TransactionContainer>
  )
}

export default TransactionSection
