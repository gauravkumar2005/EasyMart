import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";

const app = express();

/* 🔹 Middleware */
app.use(cors());
app.use(express.json());

/* 🔹 MongoDB connect */
mongoose.connect("mongodb://127.0.0.1:27017/EasyMart")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

/* 🔹 Test route */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* 🔹 Signup API */
app.post("/api/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    await User.create({ email, password });

    res.json({ message: "User registered" });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

/* 🔹 Login API */
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ message: "Login successful" });
    } else {
      res.json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

/* 🔹 Server start */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});