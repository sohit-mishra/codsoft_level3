require("dotenv").config();
const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to Quiz');
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);

        const { name, email, phonenumber, password } = req.body;

        const userExists = await User.findOne({ email: email });

        if (userExists) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const userCreated = await User.create({ name, email, phonenumber, password: hashedPassword });

        // Async function to generate a token
        const generateToken = async () => {
            try {
                const token = jwt.sign({
                    userId: userCreated._id.toString(),
                    email: userCreated.email,
                    isAdmin: userCreated.isAdmin
                },process.env.JWT_KEY,
                {
                  expiresIn: "24h"
                });

                return await token;
            } catch (error) {
                console.log(error);
            }
        };

        // Wait for the token to be generated before including it in the response
        const tokendigit = await generateToken();

        // Respond with the user information and the generated token
        res.status(201).json({
            message: 'Successfully registered',
            userId: userCreated._id.toString(),
            token: tokendigit
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Sohit Server Error' });
    }
};

module.exports = { home, register };
