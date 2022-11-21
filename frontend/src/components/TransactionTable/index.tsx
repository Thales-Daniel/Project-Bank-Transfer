/* eslint-disable no-unused-vars */
import React, { useContext } from "react"

import TransactionRow from "../TrasactionRow"
import { UserContext } from "../../contexts/UserContext"
import { TableContainer } from "./style"
import { TransactionsType } from "../../shared/types/contextTypes"
import dateFormater from "../../shared/functions/dateFormarter"

function TransactionTable() {
  const { transactions, filter, filterDate } = useContext(UserContext)

  const filterTransactions = transactions.filter(
    (item: TransactionsType) => item.type === filter
  )

  return (
    <TableContainer>
      {filterTransactions.map((item) => (
        <TransactionRow
          value={item.value}
          date={dateFormater(item.createdAt)}
          operation={item.type}
          id={
            item.type === "cash-in"
              ? item.debitedAccountId
              : item.creditedAccountId
          }
        />
      ))}
    </TableContainer>
  )
}

export default TransactionTable
