import express from "express";
import useRoute from "./routes/user.js";
import { connectDB, connectRedis } from "./utils/features.js";

const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017";
const redisURI = process.env.REDIS_URI || "";
export const redisTTL = process.env.REDIS_TTL || 60 * 60 * 4;
connectDB(mongoURI);
export const redis = connectRedis(redisURI);
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});
app.use("/api/v1/user",useRoute);


app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});