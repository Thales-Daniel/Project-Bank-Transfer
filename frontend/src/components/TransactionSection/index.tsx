import React, { useState } from "react"
import TransactionHeader from "../TransactionSectionHeader"
import TransactionTable from "../TransactionTable"
import TransactionContainer from "./style"

function TransactionSection() {
  const [filter, setFilter] = useState("")
  const [filterDate, setFilterDate] = useState("")
  return (
    <TransactionContainer>
      <TransactionHeader
        filter={filter}
        setFilter={setFilter}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />
      <TransactionTable />
    </TransactionContainer>
  )
}

export default TransactionSection
