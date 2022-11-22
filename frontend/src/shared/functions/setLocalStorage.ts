const setLocalStorage = (key: string, item: any) => {
  const itemJson = JSON.stringify(item)
  localStorage.setItem(key, itemJson)
}

export default setLocalStorage
