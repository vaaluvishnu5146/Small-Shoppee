const {
  createUser,
  signInUser,
  updateUser,
} = require("../Controllers/Authentication.controller");

const AuthRouter = require("express").Router();

AuthRouter.post("/create", createUser);
AuthRouter.post("/login", signInUser);
AuthRouter.patch("/update/:uid", updateUser);

module.exports = AuthRouter;
