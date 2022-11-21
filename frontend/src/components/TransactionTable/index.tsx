/* eslint-disable no-unused-vars */
import React, { useContext } from "react"

import TransactionRow from "../TrasactionRow"
import { UserContext } from "../../contexts/UserContext"
import { TableContainer } from "./style"
import { TransactionsType } from "../../shared/types/contextTypes"
import dateFormater from "../../shared/functions/dateFormarter"

function TransactionTable() {
  const { transactions, filter, filterDate } = useContext(UserContext)

  const filterTransactions = transactions.filter((item: TransactionsType) => {
    if (filter) return item.type === filter
    return transactions
  })

  return (
    <TableContainer>
      {filterTransactions.map((item) => (
        <TransactionRow
          value={item.value}
          date={dateFormater(item.createdAt)}
          operation={item.type}
          userName={
            item.type === "cash-out"
              ? item.credited_account.Users[0].username
              : item.debited_account.Users[0].username
          }
        />
      ))}
    </TableContainer>
  )
}

export default TransactionTable
