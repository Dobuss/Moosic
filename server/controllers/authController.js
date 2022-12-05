const { body, validationResult } = require("express-validator");
const { isGuest } = require("../middlewares/guards");
const { register, login } = require("../services/userService");
const { parseError } = require("../util/parser");

const authController = require("express").Router();

authController.post("/register", isGuest(),
  body("username").isLength({ min: 2 }).withMessage("Username must be at least 2 characters"),
  body("email").isLength({ min: 10 }).withMessage("Email must be at least 10 characters"),
  body("password").isLength({ min: 4 }).withMessage("Password must be at least 4 characters"),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }
      if (req.body.password != req.body.repass) {
        throw new Error("Passwords are not the same!");
      }
      const token = await register(req.body.username, req.body.email, req.body.password);

      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      return parseError(error);
    }
  }
);

authController.post("/login", isGuest(), async (req, res) => {
    try {
      const token = await login(req.body.email, req.body.password);
      res.cookie('token', token);
      res.redirect('/');
    } catch (error) {
      return parseError(error);
    }
  });

module.exports = authController;
