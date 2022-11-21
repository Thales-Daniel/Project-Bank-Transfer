import React, { useContext, useState } from "react"

import { BiUser } from "react-icons/bi"
import { FaMoneyBillWave } from "react-icons/fa"
import { UserContext } from "../../contexts/UserContext"
import postTransfer from "../../services/postTransfer"
import getLocalStorage from "../../shared/functions/getLocalStorage"

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
  const [err, setErr] = useState("")

  const { setUser } = useContext(UserContext)

  const handleTransfer = async () => {
    try {
      const user = getLocalStorage()
      if (user.token) {
        await postTransfer(user.accountId, accountNumber, cash, user.token)
      }
      setUser(user)
    } catch (error) {
      setErr(err)
    }
  }

  return (
    <TransferSectioContainer>
      <TransferHeader>Transfer</TransferHeader>
      <TransferInputContainer>
        <TransferLabel>
          Username
          <TransferInput
            value={accountNumber}
            onChange={(event) => setAccountNumber(event?.target.value)}
            color={err ? "red" : "gray-border"}
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
            color={err ? "red" : "gray-border"}
          />
          <Icons>
            <FaMoneyBillWave />
          </Icons>
        </TransferLabel>
        <TransferButton onClick={() => handleTransfer()}>
          Transfer
        </TransferButton>
      </TransferInputContainer>
    </TransferSectioContainer>
  )
}

export default TransferSection
