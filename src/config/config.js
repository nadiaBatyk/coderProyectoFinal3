import dotenv from "dotenv";
dotenv.config();
export default {
  mongoDB: {
    URL: process.env.MONGO_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  }
};
