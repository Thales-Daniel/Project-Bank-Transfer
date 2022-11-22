const getLocalStorage = () => {
  const result = localStorage.getItem("user")
  if (!result) {
    return null
  }
  const user = JSON.parse(result)
  return user
}

export default getLocalStorage
