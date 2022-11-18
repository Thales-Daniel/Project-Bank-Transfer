interface CreateTrasactionTypes {
  username: string
  myId: string
  myAccountId: string
  value: number
}

export interface GetTransactionsTypes {
  paramId: string
  accountId: string
  type?: string
}

export default CreateTrasactionTypes
