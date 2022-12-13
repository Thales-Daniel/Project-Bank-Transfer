import React from "react"

import { BiUser } from "react-icons/bi"
import UsernameFieldTypes from "../../../shared/types/usernameFieldTypes"
import { FildTitle, Icons, InputLogin, Label } from "./style"

function UsernameField({ username, setUsername, err }: UsernameFieldTypes) {
  return (
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
  )
}

export default UsernameField
