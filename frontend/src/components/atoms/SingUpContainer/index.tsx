import React from "react"
import { LinkSingUp, SignUpContainer } from "./style"

function SingUpContainer() {
  return (
    <SignUpContainer>
      have an account? <LinkSingUp to="/register">Sign Up</LinkSingUp>
    </SignUpContainer>
  )
}

export default SingUpContainer
