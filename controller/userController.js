const User = require("../model/user")
const bcrypt = require("bcryptjs")



const createUser = async (req, res) => {
    try {
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)


        //create new user object
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            username: req.body.username,
            password: hashPassword
        })

        const user = await newUser.save()
        return res.status(201).json({ user })
    } catch (error) {
        return res.status(500).json({ "errMsg": error })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (checkUser === null) {
            res.status(404).json({ msg: "user not found" })
        } else {
            const checkPassword = await bcrypt.compare(password, checkUser.password)
            if (checkPassword) {
                res.status(200).json({ user})
            } else {
                res.status(401).json({ msg: "wrong username/password" })
            }
        }
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" })
    }
}


module.exports = {
    createUser,
    login
}