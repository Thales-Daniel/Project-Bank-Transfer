import express from "express"
import cors from "cors"
import errorHandler from "../middlewares/errorHandler"
import loginRouter from "../routers/LoginUserRouter"
import userRouter from "../routers/CreateUserRouter"
import balanceRouter from "../routers/BalanceRouter"
import transactionRouter from "../routers/TransactionRouter"

const app = express()
const PORT = process.env.PORT || 3333

app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use(loginRouter)
app.use(balanceRouter)
app.use(transactionRouter)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`))
