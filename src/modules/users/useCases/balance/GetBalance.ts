import bcrypt from "bcrypt"

import prisma from "../../../../database/client"
import { ErrorApp } from "../../../../middlewares/ErrorApp"
import GetBalanceTypes from "../../Types/GetBalanceTypes"

export class GetBalance {
  async execute({ id, accountId }: GetBalanceTypes) {
    if (id !== accountId) throw new ErrorApp("Operation not allowed", 400)

    const balance = await prisma.accounts.findFirst({
      where: {
        id: accountId,
      },
    })

    return balance
  }
}
