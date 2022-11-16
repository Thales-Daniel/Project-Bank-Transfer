import prisma from "../../../../database/client"
import CreateUserTypes from "../../Types/CreateUserType"
import { ErrorApp } from "../../../../middlewares/ErrorApp"

export class CreateUser {
  async execute({ username, password }: CreateUserTypes) {
    console.log(username, password)
    const userAlreadyExists = await prisma.users.findFirst({
      where: {
        username,
      },
    })

    if (userAlreadyExists) throw new ErrorApp("User Alredy exists")

    const idAccount = await prisma.accounts.create({
      data: {
        balance: 100,
      },
    })

    const user = await prisma.users.create({
      data: {
        username,
        password,
        accountId: idAccount.id,
      },
    })

    return user
  }
}
