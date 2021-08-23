const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  ratings: [Number],
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
