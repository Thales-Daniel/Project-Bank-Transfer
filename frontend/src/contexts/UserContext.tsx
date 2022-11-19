import React, { createContext, useMemo, useState } from "react"

import {
  ContextType,
  ProviderProps,
  UserType,
} from "../shared/types/contextTypes"

export const UserContext = createContext<ContextType>({} as ContextType)

export function UserProvider({ children }: ProviderProps) {
  const [user, setUser] = useState({} as UserType)

  const context = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  )
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}
