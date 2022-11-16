import { Router } from "express"
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController"
import { validateUser } from "../middlewares/validatorUser"

const createUserController = new CreateUserController().handle

const router = Router()

router.post("/register", validateUser, createUserController)

export default createUserController
