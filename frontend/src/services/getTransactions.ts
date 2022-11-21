import axios from "axios"

const getTransactions = async (accountId: string, jsonToken: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3333/user/transaction/${accountId}`,
      {
        headers: {
          authorization: jsonToken,
        },
      }
    )
    return data
  } catch (err: any) {
    throw Error(err.response.data.message)
  }
}

export default getTransactions
