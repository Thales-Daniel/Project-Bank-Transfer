import React, { useState } from "react"
import { BiUser } from "react-icons/bi"
import { FaMoneyBillWave } from "react-icons/fa"

import {
  Icons,
  TransferButton,
  TransferHeader,
  TransferInput,
  TransferInputContainer,
  TransferLabel,
  TransferSectioContainer,
} from "./style"

function TransferSection() {
  const [accountNumber, setAccountNumber] = useState("")
  const [cash, setCash] = useState<number>(0)
  return (
    <TransferSectioContainer>
      <TransferHeader>Transfer</TransferHeader>
      <TransferInputContainer>
        <TransferLabel>
          Account Number
          <TransferInput
            value={accountNumber}
            onChange={(event) => setAccountNumber(event?.target.value)}
          />
          <Icons>
            <BiUser />
          </Icons>
        </TransferLabel>
        <TransferLabel>
          Value
          <TransferInput
            type="number"
            value={cash}
            onChange={(event) => setCash(parseFloat(event.target.value))}
          />
          <Icons>
            <FaMoneyBillWave />
          </Icons>
        </TransferLabel>
        <TransferButton>Transfer</TransferButton>
      </TransferInputContainer>
    </TransferSectioContainer>
  )
}

export default TransferSection
