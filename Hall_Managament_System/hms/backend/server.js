const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect("mongodb+srv://hms:hms2520@cluster0.22yznvo.mongodb.net/hms")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/students", studentRoutes);

app.listen(5000, () => console.log("Server running http://localhost:5000"));

