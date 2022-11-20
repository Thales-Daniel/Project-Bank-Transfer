import React from "react"

import BalanceSection from "../BalanceSection"
import TransactionSection from "../TransactionSection"
import TransferSection from "../TransferSection"
import { Main, MainFirstSection } from "./style"

function DashboardMain() {
  return (
    <Main>
      <MainFirstSection>
        <BalanceSection />
        <TransferSection />
      </MainFirstSection>
      <TransactionSection />
    </Main>
  )
}

export default DashboardMain
