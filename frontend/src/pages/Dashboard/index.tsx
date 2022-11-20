import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

import HeaderDashboard from "../../components/HeaderDashboard"
import getLocalStorage from "../../shared/functions/getLocalStorage"
import DashboardMain from "../../components/DashboardMain"
import { UserType } from "../../shared/types/contextTypes"
import { DashbordContainer, MainContainer } from "./style"

function Dashboard() {
  const [user, setUser] = useState({} as UserType)
  const [logOut, setLogOut] = useState(false)

  useEffect(() => {
    const getUser = getLocalStorage()
    setUser(getUser)
  }, [])

  if (!user?.token) return <div>something went wrong, login again</div>

  if (logOut) return <Navigate to="/" />

  return (
    <DashbordContainer>
      <HeaderDashboard user={user} setLogout={setLogOut} />
      <MainContainer>
        <DashboardMain />
      </MainContainer>
    </DashbordContainer>
  )
}

export default Dashboard
