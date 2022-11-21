import axios from "axios"

const postTransfer = async (
  myId: string,
  username: string,
  value: number,
  token: string
) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3333/user/transaction",
      {
        myId,
        username,
        value,
      },
      {
        headers: {
          authorization: token,
        },
      }
    )
    return data
  } catch (err: any) {
    throw Error(err.response.data.message)
  }
}

export default postTransfer
