import { NextFunction, Request, Response } from "express"
import { GetTransaction } from "./GetTransaction"

export class GetTransactionController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { paransId } = req.params
      const { accountId } = req
      const getTransaction = new GetTransaction()
      const result = await getTransaction.execute({
        paransId,
        accountId,
      })
      return res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }
}
