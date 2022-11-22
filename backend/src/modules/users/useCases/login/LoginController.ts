import { NextFunction, Request, Response } from "express"
import { LoginUser } from "./LoginUser"

export class LoginUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body
      const loginUser = new LoginUser()
      const result = await loginUser.execute({
        username,
        password,
      })
      return res.status(200).json({
        message: "Login successfully",
        accountId: result.accountId,
        id: result.id,
        token: result.token,
        username: result.username,
      })
    } catch (err) {
      next(err)
    }
  }
}
