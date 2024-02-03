const { Types } = require("mongoose");
const AuthModel = require("../Models/Authentication.model");

function createUser(req, res, next) {
  const User = new AuthModel(req.body);

  User.save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          success: true,
          message: "User created successfully",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: error,
      });
    });
}

function signInUser(req, res, next) {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is missing",
    });
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Password is missing",
    });
  }

  AuthModel.findOne({ email: email })
    .then((response) => {
      if (response && response._id) {
        if (password === response.password) {
          return res.status(200).json({
            success: true,
            message: "Sign In successful",
          });
        } else {
          return res.status(200).json({
            success: false,
            message: "Email Id or Password is invalid!",
          });
        }
      } else {
        return res.status(200).json({
          success: false,
          message: "Account does not exists!",
        });
      }
    })
    .catch((error) => console.log(error));
}

function forgotPassword(req, res, next) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is missing",
    });
  }

  AuthModel.findOne({ email: email })
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          success: true,
          message: "user found, Forgot password allowed",
          uid: response._id,
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Account does not exists!",
        });
      }
    })
    .catch((error) => console.log(error));
}

function updateUser(req, res, next) {
  console.log(req.body, req.params);
  AuthModel.findOneAndUpdate(
    { _id: new Types.ObjectId(req.params.uid) },
    req.body,
    {
      new: true,
    }
  )
    .then((response) => {
      if (response) {
        console.log(response);
        return res
          .status(200)
          .json({ success: true, message: "User updated successfully" });
      }
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
}

module.exports = {
  createUser,
  updateUser,
  signInUser,
  forgotPassword,
};
