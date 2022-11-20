const dateFormater = (date: string) =>
  new Intl.DateTimeFormat("pt-BR").format(new Date(date))

export default dateFormater
