
const router = require("express").Router()
const {makePayment} = require("../controller/balanceController")

router.route("/transfer").post(makePayment)

module.exports = router