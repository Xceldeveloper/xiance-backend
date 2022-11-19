
const router = require("express").Router()
const {makePayment, sendMoney} = require("../controller/balanceController")

router.route("/topup").post(makePayment)
router.route("/transfer").post(sendMoney)

module.exports = router