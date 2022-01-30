import mongoose from "mongoose";
import { config } from "./config";

const url = `mongodb://${config.mongoose.hostname}:${config.mongoose.port}/${config.mongoose.db}`;

mongoose.set("debug", true); // To see mongoose data in the terminal Mongoose : ***
mongoose.Promise = Promise; // To use async functions

let connectDB = async () => {
	try {
		await mongoose.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		console.log(`Database connection error ${error}`);
	}
};

export { connectDB };
