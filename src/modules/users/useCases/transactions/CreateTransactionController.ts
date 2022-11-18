import { NextFunction, Request, Response } from "express"
import { CreateTransaction } from "./CreateTransaction"

export class CreateTransactionController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, myId, value } = req.body
      const { accountId } = req
      const createTransaction = new CreateTransaction()
      const result = await createTransaction.execute({
        myId,
        username,
        myAccountId: accountId,
        value,
      })
      return res.status(200).json({ message: result })
    } catch (err) {
      next(err)
    }
  }
}
