const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//making custom static signup function for mongodb
userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  //checking if the email if valid
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  //checking if password is strong enough
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  //check if email already exists
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already exists.");
  }

  //hashing the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  //checking if email exists
  const exists = await this.findOne({ email });

  if (!exists) {
    throw Error("Email does not exist");
  }

  //checking if password matches
  const match = await bcrypt.compare(password, exists.password);

  if (!match) {
    throw Error("Passwords do not match");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
