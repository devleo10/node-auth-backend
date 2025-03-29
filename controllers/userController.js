import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getUserProfile = async (req, res) => {
  try {
    res.status(200).json(req.user); 
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const updateUserProfile = async (req, res) => {
  const { name, email, address, bio, profilePic, password } = req.body;

  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (name) user.name = name;
    if (email) user.email = email;
    if (address) user.address = address;
    if (bio) user.bio = bio;
    if (profilePic) user.profilePic = profilePic;

    
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
