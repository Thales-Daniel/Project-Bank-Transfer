import React, { useState } from "react"

import register from "../../../services/postRegister"
import {
  ErrorComponent,
  SucessComponent,
} from "../../../shared/styles/GlobalStyles"
import ReturnToLoginContainer from "../../atoms/ReturnToLoginContainer"
import PasswordField from "../../molecules/PasswordField"
import UsernameField from "../../molecules/UsernameField"
import { BoxContainer, BoxContainerTitle, CreateAccountButton } from "./style"

function BoxRegister() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showError, setShowError] = useState(false)
  const [err, setErr] = useState("")
  const [showSucess, setShowSucess] = useState("")
  const [sucess, setSucess] = useState(false)

  const handleRegister = async () => {
    try {
      if (confirmPassword !== password)
        throw new Error("password have be the same")

      await register(username, password)
      setShowSucess("user created successfully")
      setSucess(true)
      setTimeout(() => {
        setSucess(false)
        setShowSucess("")
      }, 3500)
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
      <UsernameField username={username} setUsername={setUsername} err={err} />
      <PasswordField
        title="Password"
        showPassword={showPassword}
        setPassword={setPassword}
        err={err}
        password={password}
        setShowPassword={setShowPassword}
      />
      <PasswordField
        title="Confirm Password"
        showPassword={showConfirmPassword}
        setPassword={setConfirmPassword}
        err={err}
        password={confirmPassword}
        setShowPassword={setShowConfirmPassword}
      />
      {sucess && <SucessComponent>{showSucess}</SucessComponent>}
      {showError && <ErrorComponent>{err}</ErrorComponent>}
      <CreateAccountButton onClick={() => handleRegister()}>
        Create Account
      </CreateAccountButton>
      <ReturnToLoginContainer />
    </BoxContainer>
  )
}

export default BoxRegister
