
import mongoose from "mongoose";

const connectDb = async () => {
        try {
            const conn = await mongoose.connect(`mongodb://localhost:27017/chai`, {
                useNewUrlParser: true,
            });
            console.log(`MongoDB Connected: ${`mongodb://localhost:27017/chai`}`);
            return conn;
            
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }

  export default connectDb;