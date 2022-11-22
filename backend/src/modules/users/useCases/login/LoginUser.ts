import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import prisma from "../../../../database/client"
import CreateUserTypes from "../../../../helpers/Types/CreateUserType"
import { ErrorApp } from "../../../../middlewares/ErrorApp"
import { fileReader } from "../../../../helpers/funcs/fileReader"

export class LoginUser {
  async execute({ username, password }: CreateUserTypes) {
    const secret = fileReader("jwt.evaluation.key")

    const findUser = await prisma.users.findFirst({
      where: {
        username,
      },
    })

    if (!findUser) throw new ErrorApp("User not Registred", 400)

    const hashPassword = await bcrypt.compare(password, findUser.password)

    if (!hashPassword) throw new ErrorApp("Wrong Password", 400)

    const token = jwt.sign({ data: findUser }, secret, {
      expiresIn: "24h",
    })

    return {
      accountId: findUser.accountId,
      id: findUser.id,
      username,
      token,
    }
  }
}
