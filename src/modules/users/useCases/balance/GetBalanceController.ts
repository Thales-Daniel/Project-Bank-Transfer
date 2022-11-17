import { NextFunction, Request, Response } from "express"
import { GetBalance } from "./GetBalance"

export class GetBalanceController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const { accountId } = req
      const getBalance = new GetBalance()
      const result = await getBalance.execute({
        id,
        accountId,
      })
      return res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }
}
