require("dotenv").config();
const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {

        console.log(req.body);

        const { email, password } = req.body;

        const UserExist = await User.findOne({ email: email });

        if (!UserExist) {
            return res.status(400).json({ message: "Invalid Creditinals" });
        }

        const generateToken = async () => {
            try {
                const token = jwt.sign({
                    userId: UserExist._id.toString(),
                    email: UserExist.email,
                    isAdmin: UserExist.isAdmin
                },process.env.JWT_KEY,
                {
                  expiresIn: "24h"
                });

                return await token;
            } catch (error) {
                console.log(error);
            }
        };

        const tokendigit = await generateToken();

        const user = await bcrypt.compare(password, UserExist.password);
        if (user) {
            res.status(200).json({
                msg: " login sucessfully",
                token: tokendigit
            });
        }else{
            res.status(400).json({
                msg: "Email or Passowrd Invalid"
            });
        }
    } catch (error) {
        res.status(400).json({ message: req.error })
    }
}

module.exports = login;
