import React, { useState } from "react"
import { BiUser } from "react-icons/bi"
import { GiPadlockOpen, GiPadlock } from "react-icons/gi"

import {
  BoxContainer,
  FildTitle,
  Icons,
  Input,
  Label,
  BoxContainerTitle,
  LoginButton,
  LinkSingUp,
  SignUpContainer,
} from "./style"

function BoxLogin() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <BoxContainer>
      <BoxContainerTitle>Login</BoxContainerTitle>
      <Label htmlFor="login">
        <FildTitle>Login</FildTitle>
        <Input type="text" id="login" />
        <Icons>
          <BiUser />
        </Icons>
      </Label>
      <Label htmlFor="password">
        <FildTitle>Password</FildTitle>
        <Input type={showPassword ? "password" : "text"} id="passord" />
        <Icons
          as="button"
          onClick={() => setShowPassword(!showPassword)}
          theme="pointer"
        >
          {showPassword ? <GiPadlock /> : <GiPadlockOpen />}
        </Icons>
      </Label>
      <LoginButton>Login</LoginButton>
      <SignUpContainer>
        have an account? <LinkSingUp to="/register">Sign Up</LinkSingUp>
      </SignUpContainer>
    </BoxContainer>
  )
}

export default BoxLogin
