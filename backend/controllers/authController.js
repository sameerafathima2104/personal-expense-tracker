const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check whether the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = new User({

            name,
            email,
            password: hashedPassword

        });

        // Save user to MongoDB
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error",
            error: error.message
        });

    }

};
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        // Generate JWT Token
        const token = jwt.sign(

            { id: user._id },

            process.env.JWT_SECRET,

            { expiresIn: "7d" }

        );

        res.status(200).json({

            message: "Login successful",

            token,

            user: {

                id: user._id,
                name: user.name,
                email: user.email

            }

        });

    } catch (error) {

        res.status(500).json({

            message: "Server error",

            error: error.message

        });

    }

};

module.exports = {
    registerUser,
    loginUser
};
