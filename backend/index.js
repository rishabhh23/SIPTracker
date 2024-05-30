require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cors = require("cors");

//express app
const app = express();

//middleware
// app.use(express.json());
// app.use(cors({
//   origin: ['https://siptracker.vercel.app']
// }));

app.use(express.json());
app.use(cors());

//routes
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello rishabh!");
});

// connect to mongodb
mongoose
  .connect("mongodb+srv://rish23tech:FLJs0Ru2LnK5sIsS@siptracker.tih8nn2.mongodb.net/")
  .then(() => {
    app.listen(4000, () => {
      console.log("Connected to port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
