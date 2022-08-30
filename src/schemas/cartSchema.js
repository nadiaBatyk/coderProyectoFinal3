import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: { type: Array, require: true },
  userId: { type: String, require: true },
  _id:mongoose.Schema.Types.ObjectId
  //  timestamp: { type: Date, require: true },
});
export default cartSchema;
