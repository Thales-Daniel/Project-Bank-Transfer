import prisma from "../../../../database/client"
import GetTransactionsTypes from "../../../../helpers/Types/GetTransactionTypes"
import { ErrorApp } from "../../../../middlewares/ErrorApp"

export class GetTransaction {
  async execute({ paransId, accountId, type }: GetTransactionsTypes) {
    if (paransId !== accountId) throw new ErrorApp("Operation not allowed", 400)

    let transactions: any = []

    if (!type) {
      transactions = await prisma.transactions.findMany({
        orderBy: {
          createdAt: "desc",
        },
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
        select: {
          id: true,
          value: true,
          creditedAccountId: true,
          debitedAccountId: true,
          createdAt: true,
          credited_account: {
            select: {
              Users: {
                select: {
                  username: true,
                },
              },
            },
          },
          debited_account: {
            select: {
              Users: {
                select: {
                  username: true,
                },
              },
            },
          },
        },
      })
    }
    if (type == "cash-in") {
      transactions = await prisma.transactions.findMany({
        where: {
          creditedAccountId: paransId,
        },
        select: {
          id: true,
          value: true,
          creditedAccountId: true,
          debitedAccountId: true,
          createdAt: true,
          credited_account: {
            select: {
              Users: {
                select: {
                  username: true,
                },
              },
            },
          },
          debited_account: {
            select: {
              Users: {
                select: {
                  username: true,
                },
              },
            },
          },
        },
      })
    }

    if (type == "cash-out") {
      transactions = await prisma.transactions.findMany({
        where: {
          debitedAccountId: paransId,
        },
        select: {
          id: true,
          value: true,
          creditedAccountId: true,
          debitedAccountId: true,
          createdAt: true,
          credited_account: {
            select: {
              Users: {
                select: {
                  username: true,
                },
              },
            },
          },
          debited_account: {
            select: {
              Users: {
                select: {
                  username: true,
                },
              },
            },
          },
        },
      })
    }
    if (transactions.length > 0) {
      transactions.forEach((element: any) => {
        if (element.creditedAccountId == paransId) {
          element.type = "cash-in"
          element.account = element.credited_account.Users[0].username
        } else if (element.debitedAccountId == paransId) {
          element.type = "cash-out"
          element.account = element.debited_account.Users[0].username
        }
      })
      return transactions
    } else {
      return []
    }
  }
}
