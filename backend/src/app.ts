import express from "express";
import { connectDB,connectRedis } from "./utils/features.js";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import useRoute from "./routes/user.js";
import productRoute from "./routes/products.js";

config({
  path: "./.env",
});
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
app.use("/api/v1/product",productRoute);


app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});