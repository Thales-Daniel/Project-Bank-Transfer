import { ReactNode } from "react"

export type ProviderProps = {
  children: ReactNode
}

export type UserType = {
  message: string
  accountId: string
  id: string
  token: string
}

export type ContextType = {
  user: UserType
  setUser: (_user: UserType) => void
}
