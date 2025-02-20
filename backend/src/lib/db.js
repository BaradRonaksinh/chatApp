import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI); // MONGODB_URI is the environment variable that we set in the .env file
        console.log(`MongoDB Connected: ${conn.connection.host}`); // conn.connection.host will give the host name of the MongoDB server
    } catch (error) {
        console.log("MongoDB Connection Failed", error); // If the connection fails, this message will be printed in the console
    }
}