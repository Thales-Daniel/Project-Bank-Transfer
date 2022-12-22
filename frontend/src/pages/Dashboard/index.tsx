import React, { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import HeaderDashboard from "../../components/organisms/HeaderDashboard"
import getLocalStorage from "../../shared/functions/getLocalStorage"
import DashboardMain from "../../components/organisms/DashboardMain"
import { DashbordContainer, MainContainer } from "./style"
import { UserContext } from "../../contexts/UserContext"

function Dashboard() {
  const { user, setUser } = useContext(UserContext)
  const [logOut, setLogOut] = useState(false)

  const navigate = useNavigate()

  const getUser = getLocalStorage()

  useEffect(() => {
    if (!getUser?.token) return navigate("/")
    setUser(getUser)
  }, [navigate])

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
