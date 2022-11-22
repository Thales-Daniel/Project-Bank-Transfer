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
  Label,
  BoxContainerTitle,
  LoginButton,
  LinkSingUp,
  SignUpContainer,
  InputPassword,
  InputLogin,
} from "./style"
import { ErrorComponent } from "../../shared/styles/GlobalStyles"

function BoxLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({} as UserType)
  const [showError, setShowError] = useState(false)
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
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        setErr("")
      }, 5000)
    }
  }

  if (user.message) return <Navigate to="/dashboard" />

  return (
    <BoxContainer>
      <BoxContainerTitle>Login</BoxContainerTitle>
      <Label htmlFor="Username">
        <FildTitle>Username</FildTitle>
        <InputLogin
          type="text"
          id="Username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          color={err === "Error: User not Registred" ? "red" : "gray-border"}
        />
        <Icons>
          <BiUser />
        </Icons>
      </Label>
      <Label htmlFor="password">
        <FildTitle>Password</FildTitle>
        <InputPassword
          type={showPassword ? "text" : "password"}
          id="passord"
          placeholder="**********"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          color={err === "Error: Wrong Password" ? "red" : "gray-border"}
        />
        <Icons
          as="button"
          onClick={() => setShowPassword(!showPassword)}
          theme="pointer"
        >
          {!showPassword ? <GiPadlock /> : <GiPadlockOpen />}
        </Icons>
      </Label>
      {showError && <ErrorComponent>{err}</ErrorComponent>}
      <LoginButton onClick={() => handleLogin()}>Login</LoginButton>
      <SignUpContainer>
        have an account? <LinkSingUp to="/register">Sign Up</LinkSingUp>
      </SignUpContainer>
    </BoxContainer>
  )
}

export default BoxLogin
