import { Router } from "express"

import { GetBalanceController } from "../modules/users/useCases/balance/GetBalanceController"
import { validateJwt } from "../middlewares/validateJwt"

const balanceRouter = Router()

const getBalanceController = new GetBalanceController().handle

balanceRouter.get("/user/balance/:paransId", validateJwt, getBalanceController)

export default balanceRouter
