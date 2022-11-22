import axios from "axios"

const login = async (username: string, password: string) => {
  try {
    const { data } = await axios.post("http://localhost:3333/user/login", {
      username,
      password,
    })
    return data
  } catch (err: any) {
    throw Error(err.response.data.message)
  }
}

export default login
