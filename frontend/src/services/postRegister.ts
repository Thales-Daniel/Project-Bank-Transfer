import axios from "axios"

const register = async (username: string, password: string) => {
  try {
    const { data } = await axios.post("http://localhost:3333/user/register", {
      username,
      password,
    })
    return data
  } catch (err: any) {
    throw Error(err.response.data.message)
  }
}

export default register
