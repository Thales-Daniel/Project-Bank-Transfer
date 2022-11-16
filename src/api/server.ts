import express from "express"
import cors from "cors"
import errorHandler from "../middlewares/errorHandler"
import router from "./router"

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use(errorHandler)

app.listen(4003, () => console.log("Server is running in PORT 4003"))
