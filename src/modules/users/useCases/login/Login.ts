import prisma from "../../../../database/client"
import CreateUserTypes from "../../Types/CreateUserType"
import { ErrorApp } from "../../../../middlewares/ErrorApp"
import bcrypt from "bcrypt"

export class CreateUser {
  async execute({ username, password }: CreateUserTypes) {
    const findUser = await prisma.users.findFirst({
      where: {
        username,
      },
    })

    if (!findUser) throw new ErrorApp("User not Registred", 400)

    const hashPassword = await bcrypt.compare(password, findUser.password)

    if (!hashPassword) throw new ErrorApp("Wrong Password", 400)

    return {
      id: findUser.id,
      username,
      accountId: findUser.accountId,
    }
  }
}
