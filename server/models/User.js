const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: Number,

  user: {
    type: String,
  },
  location: {
    type: String,
  },
  listings: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: "listing" },
  },
});
const Auth = mongoose.model("Auth", AuthSchema);

module.exports = Auth;
