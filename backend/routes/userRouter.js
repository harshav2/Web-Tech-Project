const express = require("express");
const {
  login,
  signUp,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/signup").post(signUp);
userRouter.route("/forgotPassword").post(forgotPassword);
userRouter.patch("/resetpassword/:token", resetPassword);
module.exports = { userRouter };
