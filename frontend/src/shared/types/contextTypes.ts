import { ReactNode } from "react"

export type ProviderProps = {
  children: ReactNode
}

export type UserType = {
  message: string
  accountId: string
  id: string
  token: string
  username: string
}

export type TransactionsType = {
  id: string
  value: string
  debitedAccountId: string
  creditedAccountId: string
  createdAt: string
  type: string
}

export type ContextType = {
  setFilterDate: (_filterDate: string) => void
  filterDate: string
  filter: string
  setFilter: (_filter: string) => void
  transactions: TransactionsType[]
  setTransactions: (_transaction: TransactionsType[]) => void
  user: UserType
  setUser: (_user: UserType) => void
  balance?: string
  setBalance: (_balance: string) => void
}
