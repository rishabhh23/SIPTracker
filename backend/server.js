require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

//express app
const app = express();

//routes
app.use("/api/user", userRoutes);
