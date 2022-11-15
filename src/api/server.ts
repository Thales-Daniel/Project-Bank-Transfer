import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(4003, () => console.log("Server is running in PORT 4003"))
