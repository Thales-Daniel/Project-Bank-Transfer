import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"

import getBalance from "../services/getBalance"
import getTransactions from "../services/getTransactions"
import getLocalStorage from "../shared/functions/getLocalStorage"
import {
  ContextType,
  ProviderProps,
  TransactionsType,
  UserType,
} from "../shared/types/contextTypes"

export const UserContext = createContext<ContextType>({} as ContextType)

export function UserProvider({ children }: ProviderProps) {
  const [user, setUser] = useState({} as UserType)
  const [balance, setBalance] = useState("")
  const [transactions, setTransactions] = useState<TransactionsType[]>([])
  const [filter, setFilter] = useState("")
  const [filterDate, setFilterDate] = useState("")

  const result = getLocalStorage()

  const handleBalanceAndTransactions = useCallback(async () => {
    const money = await getBalance(result?.accountId, result?.token)
    const trans = await getTransactions(result?.accountId, result?.token)
    setBalance(money?.balance)
    setTransactions(trans)
  }, [setBalance, result, setTransactions])

  useEffect(() => {
    handleBalanceAndTransactions()
  }, [user])

  const context = useMemo(
    () => ({
      filterDate,
      setFilterDate,
      transactions,
      setTransactions,
      balance,
      setBalance,
      user,
      setUser,
      filter,
      setFilter,
    }),
    [
      filterDate,
      setFilter,
      user,
      setUser,
      balance,
      setBalance,
      transactions,
      setTransactions,
      filter,
      setFilter,
    ]
  )
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}
