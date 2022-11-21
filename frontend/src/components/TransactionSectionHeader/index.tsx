import React, { useContext } from "react"

import { UserContext } from "../../contexts/UserContext"
import { Header, FilterTransactionButton } from "./style"

function TransactionHeader() {
  const { filter, setFilter } = useContext(UserContext)
  return (
    <Header>
      <FilterTransactionButton
        theme={!filter ? "activy" : "noActivy"}
        onClick={() => setFilter("")}
      >
        Cash In/Out
      </FilterTransactionButton>
      <FilterTransactionButton
        theme={filter === "cash-in" ? "activy" : "noActivy"}
        onClick={() => setFilter("cash-in")}
      >
        Cash In
      </FilterTransactionButton>
      <FilterTransactionButton
        theme={filter === "cash-out" ? "activy" : "noActivy"}
        onClick={() => setFilter("cash-out")}
      >
        Cash Out
      </FilterTransactionButton>
    </Header>
  )
}

export default TransactionHeader
