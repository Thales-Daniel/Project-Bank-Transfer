import React, { useContext } from "react"

import TransactionRow from "../TrasactionRow"
import { UserContext } from "../../../contexts/UserContext"
import { TableContainer } from "./style"
import { TransactionsType } from "../../../shared/types/contextTypes"
import TransactionTableHeader from "../TransactionTableHeader"

function TransactionTable() {
  const { transactions, filter, filterDate } = useContext(UserContext)

  function FilterTransactions(item: TransactionsType) {
    const filterByType = item.type.includes(filter.toLowerCase())
    const filterByDate = item.createdAt.includes(filterDate.toLowerCase())
    return filterByType && filterByDate
  }

  return (
    <TableContainer>
      <TransactionTableHeader />
      {transactions.map((item) => {
        if (FilterTransactions(item)) {
          return (
            <TransactionRow
              value={item.value}
              date={item.createdAt.split("T")[0]}
              operation={item.type}
              key={item.value}
              userName={
                item.type === "cash-out"
                  ? item.credited_account.Users[0].username
                  : item.debited_account.Users[0].username
              }
            />
          )
        }
        return null
      })}
    </TableContainer>
  )
}

export default TransactionTable
