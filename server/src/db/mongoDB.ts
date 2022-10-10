import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const mongoClient = new MongoClient(process.env.MONGO_URL);

async function connectDB() {
	return await mongoClient.connect();
}

connectDB();

const mongoDB = mongoClient.db(process.env.MONGO_DATABASE);
export default mongoDB;