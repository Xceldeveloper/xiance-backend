const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT
const dbConnection = require("./config")
const cors = require("cors")
const authMiddleware = require("./middleware/authMiddleware")
const userRoute = require("./routes/userRoute")
const balanceRoute = require("./routes/balanceRoute")


app.use(cors())


app.use(express.json())
app.use(authMiddleware.authenticator)
app.use("/user", userRoute)
app.use("/balance", balanceRoute)

dbConnection.startConnection(
  app.listen(port, () => {
    console.log(`working`)
  })
)
