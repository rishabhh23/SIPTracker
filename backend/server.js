require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

//express app
const app = express();

//routes
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello rishabh!");
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
