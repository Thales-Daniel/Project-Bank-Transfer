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
  const [err, setErr] = useState("")

  const handleRegister = async () => {
    try {
      if (confirmPassword !== password)
        throw new Error("password have be the same")

      await register(username, password)
    } catch (error: any) {
      setErr(error.toString())
      console.log(err)
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
      <LoginButton onClick={() => handleRegister()}>Create Account</LoginButton>
      <SignUpContainer>
        already have an account? <LinkSingUp to="/">Make Login</LinkSingUp>
      </SignUpContainer>
    </BoxContainer>
  )
}

export default BoxRegister
