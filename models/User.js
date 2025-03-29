import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

  const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      address: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
      },
      bio: {
        type: String,
        default: "",
      },
      profilePic: {
        type: String,
        default: "https://example.com/default-profile.png",
      },
    },
    { timestamps: true }
); 

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); 
  
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });

  userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };
  const User = mongoose.model("User", userSchema);

  export default User;