import React, { useContext } from "react"

import { UserContext } from "../../../contexts/UserContext"
import {
  DateTypeInput,
  SelectOption,
  TransactionSelectContainer,
  TypeTransactionSelect,
} from "./style"

function TransactionSectionSelect() {
  const { setFilter, setFilterDate } = useContext(UserContext)

  const filterValue = (type: string) => {
    if (type === "Cash In") return setFilter("cash-in")
    if (type === "Cash Out") return setFilter("cash-out")
    setFilter("")
  }
  return (
    <TransactionSelectContainer>
      <TypeTransactionSelect
        onClick={(event) => {
          const target = event.target as HTMLSelectElement
          filterValue(target.value)
        }}
      >
        <SelectOption onChange={() => setFilter("")}>Cash In/Out</SelectOption>
        <SelectOption onChange={() => setFilter("cash-in")}>
          Cash In
        </SelectOption>
        <SelectOption onChange={() => setFilter("cash-out")}>
          Cash Out
        </SelectOption>
      </TypeTransactionSelect>
      <DateTypeInput
        onChange={(event) => setFilterDate(event.target.value)}
        type="date"
      />
    </TransactionSelectContainer>
  )
}

export default TransactionSectionSelect
