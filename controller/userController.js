const User = require("../model/user")


const createUser = async (req, res) => {
    try {
        //hash password


        //create new user object
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            username: req.body.username,
            password: req.body.password
        })

        const user = await newUser.save()
        return res.status(201).json({ user })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}


module.exports = {
    createUser,
}