import { Router } from "express"
import { LoginUserController } from "../modules/users/useCases/login/LoginController"

const loginUserController = new LoginUserController().handle

const loginRouter = Router()

loginRouter.post("/user/login", loginUserController)

export default loginRouter
