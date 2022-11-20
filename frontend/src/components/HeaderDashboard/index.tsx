import React from "react"
import { BiLogOut } from "react-icons/bi"

import logoNg from "../../shared/images/logo_ng.png"
import HeaderType from "../../shared/types/headerTypes"
import {
  ContainerImageAndWelcome,
  Header,
  LogoNg,
  LogoutButton,
  Welcome,
} from "./style"

function HeaderDashboard({ user, setLogout }: HeaderType) {
  const handleLogout = () => {
    localStorage.clear()
    setLogout(true)
  }

  return (
    <Header>
      <ContainerImageAndWelcome>
        <LogoNg src={logoNg} alt="logo ng" />
        <Welcome>Welcome Back {user.username}</Welcome>
      </ContainerImageAndWelcome>
      <LogoutButton onClick={() => handleLogout()}>
        <BiLogOut />
        Log Out
      </LogoutButton>
    </Header>
  )
}

export default HeaderDashboard
