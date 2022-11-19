const mongoose = require("mongoose")

const BalanceSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String
    },
    balance: {
        type: String
    },
})

module.exports = mongoose.model("Balence", BalanceSchema)