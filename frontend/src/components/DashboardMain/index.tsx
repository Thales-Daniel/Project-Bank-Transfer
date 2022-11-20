import React from "react"
import BalanceSection from "../BalanceSection"
import TransferSection from "../TransferSection"

import Main from "./style"

function DashboardMain() {
  return (
    <Main>
      <BalanceSection />
      <TransferSection />
    </Main>
  )
}

export default DashboardMain
