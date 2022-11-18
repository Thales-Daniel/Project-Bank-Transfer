import { Router } from "express"

import { CreateTransactionController } from "../modules/users/useCases/transactions/CreateTransactionController"
import { validateJwt } from "../middlewares/validateJwt"

const transactionRouter = Router()

const createTransactionController = new CreateTransactionController().handle

transactionRouter.post(
  "/user/transaction",
  validateJwt,
  createTransactionController
)

export default transactionRouter
