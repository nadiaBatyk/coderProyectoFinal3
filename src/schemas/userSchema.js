import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, require: true, maxLength: 100 },
  email: { type: String, require: true, maxLength: 200 },
  password: { type: String, require: true, maxLength: 20 },
  address: { type: String, require: true },
  phone: { type: String, require: true },
  age: { type: Number, require: true, min: 0 },
  
});
export default userSchema;