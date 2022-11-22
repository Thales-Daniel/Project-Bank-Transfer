import { Router } from "express"

import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/CreateTransactionController"
import { validateJwt } from "../middlewares/validateJwt"
import { GetTransactionController } from "../modules/transactions/useCases/getTransaction/GetTransactionController"

const transactionRouter = Router()

const createTransactionController = new CreateTransactionController().handle
const getTransactionController = new GetTransactionController().handle

transactionRouter.post(
  "/user/transaction",
  validateJwt,
  createTransactionController
)

transactionRouter.get(
  "/user/transaction/:paransId",
  validateJwt,
  getTransactionController
)

export default transactionRouter
