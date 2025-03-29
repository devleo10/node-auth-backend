import express from "express";
import { register, login } from "../controllers/authController.js";
import { body } from "express-validator";

const router = express.Router();


const validateLogin = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").notEmpty().withMessage("Password is required")
];


router.post("/register", [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("address").notEmpty().withMessage("Address is required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], register);


router.post("/login", validateLogin, login);

export default router;
