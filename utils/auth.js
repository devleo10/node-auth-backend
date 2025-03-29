import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "default_secret_key";
const EXPIRATION_TIME = process.env.JWT_EXPIRATION || "7d";

export const generateToken = (userId) => {
    return jwt.sign({ id: userId }, SECRET_KEY, {
        expiresIn: EXPIRATION_TIME,
    });
};

export const verifyToken = (token) => {
    try{
        return jwt.verify(token, SECRET_KEY);
    } catch(error){
        return null;
    }
}