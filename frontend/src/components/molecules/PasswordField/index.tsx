import React from "react"

import { GiPadlock, GiPadlockOpen } from "react-icons/gi"
import PasswordFieldTypes from "../../../shared/types/passwordFIeldTypes"
import { FildTitle, Icons, InputPassword, Label } from "./style"

function PasswordField({
  showPassword,
  password,
  setPassword,
  err,
  setShowPassword,
  title,
}: PasswordFieldTypes) {
  const errorMessagesArray = [
    "Error: Wrong Password",
    "Error: password have be the same",
    "Error: the password must contain a uppercase letter and a number",
  ]

  return (
    <Label htmlFor="password">
      <FildTitle>{title}</FildTitle>
      <InputPassword
        type={showPassword ? "text" : "password"}
        id="passord"
        placeholder="**********"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        color={errorMessagesArray.includes(err) ? "red" : "gray-border"}
      />
      <Icons
        as="button"
        onClick={() => setShowPassword(!showPassword)}
        theme="pointer"
      >
        {!showPassword ? <GiPadlock /> : <GiPadlockOpen />}
      </Icons>
    </Label>
  )
}

export default PasswordField
