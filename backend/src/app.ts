import express from "express";
import useRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";

const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017";

connectDB(mongoURI);
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});
app.use("/api/v1/user",useRoute);


app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});