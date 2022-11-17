import { Response, Request, NextFunction } from "express"
import { ErrorApp } from "./ErrorApp"

export const validateUser = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body
    if (!/[A-Z]/.test(password))
      throw new ErrorApp("the password must contain a uppercase letter", 404)
    if (!/[0-9]/.test(password))
      throw new ErrorApp("the password must contain a number", 404)
    if (username.length < 3) throw new ErrorApp("User is too short", 404)
    if (password.length < 8) throw new ErrorApp("Password is too short", 404)
    next()
  } catch (err) {
    next(err)
  }
}
