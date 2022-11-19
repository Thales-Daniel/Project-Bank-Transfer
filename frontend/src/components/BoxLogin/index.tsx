import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { BiUser } from "react-icons/bi"
import { GiPadlockOpen, GiPadlock } from "react-icons/gi"

import login from "../../services/postLogin"
import setLocalStorage from "../../shared/functions/setLocalStorage"
import { UserType } from "../../shared/types/contextTypes"

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
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({} as UserType)
  const [err, setErr] = useState("")

  const handleLogin = async () => {
    try {
      const result = await login(username, password)
      setLocalStorage("user", result)
      if (result) {
        setUser(result)
      }
    } catch (error: any) {
      setErr(error.toString())
    }
  }

  if (user.message) return <Navigate to={`/dashboard/${user.accountId}`} />

  return (
    <BoxContainer>
      <BoxContainerTitle>Login</BoxContainerTitle>
      <Label htmlFor="login">
        <FildTitle>Login</FildTitle>
        <Input
          type="text"
          id="login"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          color={err ? "red" : "gray-border"}
        />
        <Icons>
          <BiUser />
        </Icons>
      </Label>
      <Label htmlFor="password">
        <FildTitle>Password</FildTitle>
        <Input
          type={showPassword ? "text" : "password"}
          id="passord"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          color={err ? "red" : "gray-border"}
        />
        <Icons
          as="button"
          onClick={() => setShowPassword(!showPassword)}
          theme="pointer"
        >
          {!showPassword ? <GiPadlock /> : <GiPadlockOpen />}
        </Icons>
      </Label>
      <LoginButton onClick={() => handleLogin()}>Login</LoginButton>
      <SignUpContainer>
        have an account? <LinkSingUp to="/register">Sign Up</LinkSingUp>
      </SignUpContainer>
    </BoxContainer>
  )
}

export default BoxLogin
