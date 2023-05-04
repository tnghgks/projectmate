import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  discordId: String,
  username: { type: String, required: true, unique: true },
  email: String,
  avatarUrl: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
