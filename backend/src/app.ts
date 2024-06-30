import express from "express";
import { connectDB, connectRedis } from "./utils/features.js";
import { config } from "dotenv";
import morgan from "morgan";

//Importing Routes
import useRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import paymentRoute from "./routes/payment.js";
import { errorMiddleware } from "./middlewares/error.js";
import Stripe from "stripe";





config({
  path: "./.env",
});

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI || "";
const redisURI = process.env.REDIS_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";
export const redisTTL = process.env.REDIS_TTL || 60 * 60 * 4;
connectDB(mongoURI);
export const redis = connectRedis(redisURI);
export const stripe = new Stripe(stripeKey);
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});
app.use("/api/v1/user",useRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);


app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});