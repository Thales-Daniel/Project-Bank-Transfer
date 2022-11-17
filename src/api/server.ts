import express from "express"
import cors from "cors"
import errorHandler from "../middlewares/errorHandler"
import loginRouter from "../routers/LoginUserRouter"
import userRouter from "../routers/CreateUserRouter"
import balanceRouter from "../routers/BalanceRouter"

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use(loginRouter)
app.use(balanceRouter)

app.use(errorHandler)

app.listen(4003, () => console.log(`Server is running in PORT ${PORT}`))
