import axios from "axios"

const getBalance = async (accountId: string, jsonToken: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3333/user/balance/${accountId}`,
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

export default getBalance
