import prisma from "../../../../database/client"
import GetTransactionsTypes from "../../../../helpers/Types/GetTransactionTypes"
import { ErrorApp } from "../../../../middlewares/ErrorApp"

export class GetTransaction {
  async execute({ paransId, accountId, type }: GetTransactionsTypes) {
    if (paransId !== accountId) throw new ErrorApp("Operation not allowed", 400)

    if (!type) {
      const transations = await prisma.transactions.findMany({
        where: {
          OR: [
            {
              debitedAccountId: paransId,
            },
            {
              creditedAccountId: paransId,
            },
          ],
        },
      })
      return transations
    }

    if (type === "cash-in") {
      const transations = await prisma.transactions.findMany({
        where: {
          creditedAccountId: paransId,
        },
      })
      return transations
    }

    if (type === "cash-out") {
      const transations = await prisma.transactions.findMany({
        where: {
          debitedAccountId: paransId,
        },
      })
      return transations
    }
  }
}
