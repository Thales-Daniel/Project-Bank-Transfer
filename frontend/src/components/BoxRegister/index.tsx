import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { BiUser } from "react-icons/bi"
import { GiPadlockOpen, GiPadlock } from "react-icons/gi"

import { UserType } from "../../shared/types/contextTypes"
import register from "../../services/postRegister"
import setLocalStorage from "../../shared/functions/setLocalStorage"
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

function BoxRegister() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [user, setUser] = useState({} as UserType)
  const [err, setErr] = useState("")

  const handleRegister = async () => {
    try {
      const result = await register(username, password)
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
      <BoxContainerTitle>Register</BoxContainerTitle>
      <Label htmlFor="login">
        <FildTitle>Login</FildTitle>
        <InputLogin
          type="text"
          id="login"
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
      <Label htmlFor="confirmPassword">
        <FildTitle>Confirm Password</FildTitle>
        <InputPassword
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          color={password !== confirmPassword ? "red" : "gray-border"}
        />
        <Icons
          as="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          theme="pointer"
        >
          {!showConfirmPassword ? <GiPadlock /> : <GiPadlockOpen />}
        </Icons>
      </Label>
      <LoginButton onClick={() => handleRegister()}>Create Account</LoginButton>
      <SignUpContainer>
        already have an account? <LinkSingUp to="/">Make Login</LinkSingUp>
      </SignUpContainer>
    </BoxContainer>
  )
}

export default BoxRegister
