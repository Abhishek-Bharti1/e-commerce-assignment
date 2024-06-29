import express from "express";
import { connectDB, connectRedis } from "./utils/features.js";
import { config } from "dotenv";
import morgan from "morgan";

//Importing Routes
import useRoute from "./routes/user.js";



config({
  path: "./.env",
});

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI || "";
const redisURI = process.env.REDIS_URI || "";
export const redisTTL = process.env.REDIS_TTL || 60 * 60 * 4;
connectDB(mongoURI);
export const redis = connectRedis(redisURI);
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});
app.use("/api/v1/user",useRoute);


app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});