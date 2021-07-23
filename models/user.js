import mongoose from "mongoose";
const Schema = mongoose.Schema;
const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
    address: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("users", User);
