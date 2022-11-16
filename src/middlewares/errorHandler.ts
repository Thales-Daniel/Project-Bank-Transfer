import { ErrorRequestHandler } from "express"

const errorHandler: ErrorRequestHandler = (err, _req, res) => {
  if (!err.statusCode)
    return res.status(500).json({ message: "Internal server error" })
  return res.status(err.statusCode).json({ message: err.message })
}

export default errorHandler
