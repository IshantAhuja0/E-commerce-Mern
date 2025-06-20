import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("MongoDB connected! Host:", connectionInstance.connection.host);
  } catch (err) {
    console.log("Problem in connection:", err);
    process.exit(1);
  }
};

export default connectDB;
