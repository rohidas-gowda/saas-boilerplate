const mongoose = require("mongoose");

const Users = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
});

const userModel = mongoose.model('UserInfo', Users)

module.exports = userModel;