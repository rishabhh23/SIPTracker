require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

//express app
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello rishabh!");
});

//connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/SIPTracker")
  .then(() => {
    app.listen(4000, () => {
      console.log("Connected to port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
