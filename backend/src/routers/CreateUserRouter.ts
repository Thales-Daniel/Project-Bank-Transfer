import { Router } from "express"
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController"
import { validateUser } from "../middlewares/validateUser"

const userRouter = Router()

const createUserController = new CreateUserController().handle

userRouter.post("/user/register", validateUser, createUserController)

userRouter.get("/", (request, response) => {
  response.json("Testando API")
})

export default userRouter
