const mongoose = require("mongoose");

const { Schema } = mongoose;

// user schema
const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  accesslevel: { type: String, required: true },
});

userSchema.virtual("fullName").get(() => {
  return `${this.firstName} ${this.lastName}`;
});

// Export user model
module.exports = mongoose.model("User", userSchema);
