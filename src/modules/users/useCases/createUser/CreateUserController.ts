import { NextFunction, Request, Response } from "express"
import { CreateUser } from "./CreateUser"

export class CreateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body
      const createClientUseCase = new CreateUser()
      const result = await createClientUseCase.execute({
        username,
        password,
      })
      return res.status(200).json({ payload: result })
    } catch (err) {
      next(err)
    }
  }
}
