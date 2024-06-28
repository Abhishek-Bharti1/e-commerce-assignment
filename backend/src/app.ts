import express from "express";


const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});



app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});