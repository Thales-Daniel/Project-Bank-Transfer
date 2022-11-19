import React, { useState } from "react"
import { BiUser } from "react-icons/bi"
import { GiPadlockOpen, GiPadlock } from "react-icons/gi"

import register from "../../services/postRegister"
import {
  BoxContainer,
  FildTitle,
  Icons,
  Label,
  BoxContainerTitle,
  InputPassword,
  InputLogin,
  ErrorComponent,
  LinkLogin,
  GoToLogin,
  CreateAccountButton,
} from "./style"

function BoxRegister() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showError, setShowError] = useState(false)
  const [err, setErr] = useState("")

  const handleRegister = async () => {
    try {
      if (confirmPassword !== password)
        throw new Error("password have be the same")

      await register(username, password)
    } catch (error: any) {
      setErr(error.toString())
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        setErr("")
      }, 5000)
    }
  }

  return (
    <BoxContainer>
      <BoxContainerTitle>Register</BoxContainerTitle>
      <Label htmlFor="Username">
        <FildTitle>Username</FildTitle>
        <InputLogin
          type="text"
          id="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          color={err === "Error: User is too short" ? "red" : "gray-border"}
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
          color={
            err ===
            "Error: the password must contain a uppercase letter and a number"
              ? "red"
              : "gray-border"
          }
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
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          color={
            err === "Error: password have be the same" ||
            err ===
              "Error: the password must contain a uppercase letter and a number"
              ? "red"
              : "gray-border"
          }
        />
        <Icons
          as="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          theme="pointer"
        >
          {!showConfirmPassword ? <GiPadlock /> : <GiPadlockOpen />}
        </Icons>
      </Label>
      {showError && <ErrorComponent>{err}</ErrorComponent>}
      <CreateAccountButton onClick={() => handleRegister()}>
        Create Account
      </CreateAccountButton>
      <GoToLogin>
        already have an account? <LinkLogin to="/">Make Login</LinkLogin>
      </GoToLogin>
    </BoxContainer>
  )
}

export default BoxRegister
