import React, { useContext, useState } from "react"

import { BiUser } from "react-icons/bi"
import { FaMoneyBillWave } from "react-icons/fa"
import { UserContext } from "../../../contexts/UserContext"
import postTransfer from "../../../services/postTransfer"
import getLocalStorage from "../../../shared/functions/getLocalStorage"
import {
  ErrorComponent,
  SucessComponent,
} from "../../../shared/styles/GlobalStyles"

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
  const [sucess, setSucess] = useState(false)
  const [showSucess, setShowSucess] = useState("")
  const [showError, setShowError] = useState("")
  const [error, setError] = useState(false)

  const { setUser } = useContext(UserContext)

  const handleTransfer = async () => {
    try {
      const user = getLocalStorage()
      if (user.token) {
        const result = await postTransfer(
          user.accountId,
          accountNumber,
          cash,
          user.token
        )
        setShowSucess(result.message)
        setSucess(true)
        setTimeout(() => {
          setSucess(false)
          setShowSucess("")
        }, 3500)
      }
      setUser(user)
    } catch (err: any) {
      setShowError(err.toString())
      setError(true)
      setTimeout(() => {
        setError(false)
        setShowError("")
      }, 3500)
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
            color={showError ? "red" : "gray-border"}
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
            color={showError ? "red" : "gray-border"}
          />
          <Icons>
            <FaMoneyBillWave />
          </Icons>
        </TransferLabel>
      </TransferInputContainer>
      {sucess && <SucessComponent>{showSucess}</SucessComponent>}
      {error && <ErrorComponent>{showError}</ErrorComponent>}
      <TransferButton onClick={() => handleTransfer()}>Transfer</TransferButton>
    </TransferSectioContainer>
  )
}

export default TransferSection
