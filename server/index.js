import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import postRouter from "./routes/posts.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});

const CONNECTION_URL =
  "mongodb+srv://sreenathparamasivam:sreenath123@cluster0.oewky.mongodb.net/myFirstDatabase";

mongoose
  .connect(process.env.CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on Port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
