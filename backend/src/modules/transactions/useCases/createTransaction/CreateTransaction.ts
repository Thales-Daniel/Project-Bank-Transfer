import prisma from "../../../../database/client"
import { ErrorApp } from "../../../../middlewares/ErrorApp"
import CreateTrasactionTypes from "../../../../helpers/Types/CreateTrasactionTypes"

export class CreateTransaction {
  async execute({ myId, username, myAccountId, value }: CreateTrasactionTypes) {
    if (+value < 0) throw new ErrorApp("Invalid Value")

    const accountDebited = await prisma.accounts.findFirst({
      where: {
        id: myId,
      },
    })

    if (!accountDebited) throw new ErrorApp("Invalid account owner id", 400)

    const accountCredited = await prisma.users.findFirst({
      where: {
        username,
      },
      select: {
        username: true,
        accountId: true,
        accountFK: {
          select: {
            balance: true,
          },
        },
      },
    })

    if (!accountCredited || username === accountCredited.username)
      throw new ErrorApp("Invalid username account", 404)

    if (+value > +accountDebited.balance)
      throw new ErrorApp("Insufficient balance", 400)

    await prisma.transactions.create({
      data: {
        debitedAccountId: myAccountId,
        creditedAccountId: accountCredited.accountId,
        value: +value,
      },
    })

    await prisma.accounts.update({
      where: {
        id: accountCredited.accountId,
      },
      data: {
        balance: +accountCredited.accountFK.balance + +value,
      },
    })

    await prisma.accounts.update({
      where: {
        id: myId,
      },
      data: {
        balance: +accountDebited.balance - +value,
      },
    })

    return "successful transaction"
  }
}
