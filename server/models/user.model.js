import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique username"],
    unique: false,
  },

  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: true,
  },

  firstName: { type: String },
  laseName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
});

export default mongoose.model("users", userSchema);
