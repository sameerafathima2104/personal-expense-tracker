const express = require("express");
const cors = require("cors");
require("dotenv").config();


const connectDB = require("./config/db");

const transactionRoutes = require("./routes/transactionRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 Expense Tracker Backend is Running!");
});

app.use("/api/transactions", transactionRoutes);
app.use("/api/auth", authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});