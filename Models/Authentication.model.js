const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
    default: "",
  },
  isKYCCompleted: {
    type: Boolean,
    default: false,
  },
  roles: {
    type: Array,
    default: ["A"],
  },
});

const AuthModel = mongoose.model("user", AuthSchema);

module.exports = AuthModel;
