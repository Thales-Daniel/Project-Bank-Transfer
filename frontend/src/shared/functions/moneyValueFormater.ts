const moneyValueFormater = (money: any) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(money)

export default moneyValueFormater
