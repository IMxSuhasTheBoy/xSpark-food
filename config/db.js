import mongoose from "mongoose";


export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log("Error", error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};
