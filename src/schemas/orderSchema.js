import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cart: mongoose.Schema.Types.Mixed,
  user: mongoose.Schema.Types.Mixed,
  userId: { type: String, require: true },
  _id:mongoose.Schema.Types.ObjectId
});
export default orderSchema;
