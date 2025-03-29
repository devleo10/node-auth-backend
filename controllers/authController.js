import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/auth.js";
import { validationResult } from "express-validator";


export const register = async (req,res) =>{
    const { name, email, address, password, bio, profilePic} = req.body;
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const userExists = await User.findOne({email});
        if(userExists)
            return res.status(400).json({ message: "This email is already registered."}); 

        const newUser = new User ({
            name,
            email,
            address,
            password,
            bio,
            profilePic
        })
        await newUser.save();
        
        const token = generateToken(newUser._id);

        res.status(201).json({
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            },
            token
     });
} catch (error){
    res.status(500).json({message:"server error",error:error.message});
}
};

export const login = async (req,res) =>{
    const  {email,password} = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    
    try{
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({message:"Invalid email."})

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) return res.status(401).json({message:"Invalid password."})

        const token = generateToken(user._id);
        res.status(200).json({
            message:"Login successful",
            user:{
                id: user._id, name: user.name, email:user.email},
                token
            
        });
    } catch (error) {
        res.status(500).json({message:"Server error", error:error.message});
    } 

};