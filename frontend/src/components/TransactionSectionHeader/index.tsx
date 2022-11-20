import React from "react"
import dateFormater from "../../shared/functions/dateFormarter"

import TransactionHeaderType from "../../shared/types/transactionHeaderType"
import { Header, FilterTransactionButton, DateFilter } from "./style"

function TransactionHeader({
  filter,
  setFilter,
  setFilterDate,
}: TransactionHeaderType) {
  return (
    <Header>
      <FilterTransactionButton
        theme={!filter ? "activy" : "noActivy"}
        onClick={() => setFilter("")}
      >
        Cash In/Out
      </FilterTransactionButton>
      <FilterTransactionButton
        theme={filter === "Cash In" ? "activy" : "noActivy"}
        onClick={() => setFilter("Cash In")}
      >
        Cash In
      </FilterTransactionButton>
      <FilterTransactionButton
        theme={filter === "Cash Out" ? "activy" : "noActivy"}
        onClick={() => setFilter("Cash Out")}
      >
        Cash Out
      </FilterTransactionButton>
      <DateFilter
        type="date"
        onChange={(event) => setFilterDate(dateFormater(event.target.value))}
      />
    </Header>
  )
}

export default TransactionHeader
