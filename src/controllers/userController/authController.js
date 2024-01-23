import Jwt from "jsonwebtoken";
import userModel from "./../../models/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const login = async (req, res) => {
    try {
        const { email, password } = req.body; 
        
        const oldUser = await userModel.findOne({ email }); // Change here
        if (!oldUser) {
            res.status(404).json("User does not exist");
            return;
        }
        if(oldUser.userActive===false){
            res.status(404).json("User does not exist");
            return;
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordCorrect) {
            res.status(400).json("Invalid credentials");
            return;
        }
        const token = Jwt.sign(
            { email: oldUser.email, id: oldUser._id }, 
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        /* send token in a cookie */
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 3600000
        });

        res.status(200).json({
            result: {
                email: oldUser.email,
                id: oldUser._id
            },
            token
        });
    } catch (e) {
        console.error(e);
        res.status(500).json("Error logging user");
    }
};

const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json("Logged out");
};

export default { login, logout };
