import React from "react"

import { GoToLogin, LinkLogin } from "./style"

function ReturnToLoginContainer() {
  return (
    <GoToLogin>
      already have an account? <LinkLogin to="/">Make Login</LinkLogin>
    </GoToLogin>
  )
}

export default ReturnToLoginContainer
