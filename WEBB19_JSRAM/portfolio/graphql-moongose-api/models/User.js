var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    username: String,
    name: String,
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
