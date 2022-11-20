import React from "react"
import { FaMoneyBillWave } from "react-icons/fa"

import { AccountBalance, BalanceValue, SectionBalance } from "./style"

function BalanceSection() {
  return (
    <SectionBalance>
      <AccountBalance>
        Account
        <FaMoneyBillWave />
      </AccountBalance>
      <BalanceValue>$500,00</BalanceValue>
    </SectionBalance>
  )
}

export default BalanceSection
