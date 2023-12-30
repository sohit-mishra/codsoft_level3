require("dotenv").config();
const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const forgotpassword = async (req, res) => {
    try {
        console.log(req.body);

        const { email} = req.body;

        const userExist = await User.findOne({ email: email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const updatePasswordRoute = '/ConfirmPassword';
        const resetToken = jwt.sign({ email: userExist.email }, process.env.JWT_KEY, { expiresIn: "1h" });
        const resetLink = `${req.protocol}://localhost:3000${updatePasswordRoute}?token=${resetToken}`;

        res.status(200).json({ message: "Reset link sent successfully", link : resetLink });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = forgotpassword;
