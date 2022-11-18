import prisma from "../../../../database/client"
import { ErrorApp } from "../../../../middlewares/ErrorApp"
import GetBalanceTypes from "../../../../helpers/Types/GetBalanceTypes"

export class GetBalance {
  async execute({ paransId, accountId }: GetBalanceTypes) {
    if (paransId !== accountId) throw new ErrorApp("Operation not allowed", 400)

    const balance = await prisma.accounts.findFirst({
      where: {
        id: accountId,
      },
    })

    return balance
  }
}
