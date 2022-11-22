import { UserType } from "./contextTypes"

type HeaderType = {
  user: UserType
  setLogout: (_logout: boolean) => void
}

export default HeaderType
