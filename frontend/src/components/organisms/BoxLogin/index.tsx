import React, { useState } from "react"
import { Navigate } from "react-router-dom"

import login from "../../../services/postLogin"
import setLocalStorage from "../../../shared/functions/setLocalStorage"
import { UserType } from "../../../shared/types/contextTypes"
import { ErrorComponent } from "../../../shared/styles/GlobalStyles"
import { BoxContainer, BoxContainerTitle, LoginButton } from "./style"
import UsernameField from "../../molecules/UsernameField"
import PasswordField from "../../molecules/PasswordField"
import SingUpContainer from "../../atoms/SingUpContainer"

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
      <UsernameField username={username} setUsername={setUsername} err={err} />
      <PasswordField
        title="Password"
        showPassword={showPassword}
        setPassword={setPassword}
        err={err}
        password={password}
        setShowPassword={setShowPassword}
      />
      {showError && <ErrorComponent>{err}</ErrorComponent>}
      <LoginButton onClick={() => handleLogin()}>Login</LoginButton>
      <SingUpContainer />
    </BoxContainer>
  )
}

export default BoxLogin
