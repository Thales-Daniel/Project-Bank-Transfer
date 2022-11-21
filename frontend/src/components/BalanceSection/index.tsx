import React, { useContext } from "react"

import { FaMoneyBillWave } from "react-icons/fa"
import { UserContext } from "../../contexts/UserContext"
import { AccountBalance, BalanceValue, SectionBalance } from "./style"

function BalanceSection() {
  const { balance } = useContext(UserContext)

  return (
    <SectionBalance>
      <AccountBalance>
        Account
        <FaMoneyBillWave />
      </AccountBalance>
      <BalanceValue>${balance}</BalanceValue>
    </SectionBalance>
  )
}

export default BalanceSection
