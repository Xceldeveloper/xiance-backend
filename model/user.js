const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true,
        max: 20,
        min: 5
    },
    password: {
        type: String,
        required: true,
        unique: true,
        max: 20,
        min: 5
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)