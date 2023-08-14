const express = require("express");

// controller functions
const { loginUser, signupUser } = require("../controllers/userController");
const { sign } = require("crypto");

const router = express.router();

//login router
router.post("/login", loginUser);

//signup router
router.post("/signup", signupUser);

module.exports = router;
