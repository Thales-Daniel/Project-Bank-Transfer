import { Response, Request, NextFunction } from "express"
import { verify } from "jsonwebtoken"

import { fileReader } from "../helpers/funcs/fileReader"
import { ErrorApp } from "./ErrorApp"

type JwtPayload = {
  data: {
    accountId: string
    username: string
  }
}

export const validateJwt = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const secret = fileReader("jwt.evaluation.key")
    const token = req.headers.authorization

    if (!token) throw new ErrorApp("Token not Found", 400)

    const { data } = verify(token, secret) as JwtPayload

    req.username = data.username.toString()
    req.accountId = data.accountId.toString()

    return next()
  } catch (err) {
    throw new ErrorApp("Invalid Token", 400)
  }
}
