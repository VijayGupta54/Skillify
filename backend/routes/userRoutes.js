const express = require("express");
const router = express.Router();
const studentMiddlewares = require("../middlewares/studentMiddlewares");
const studentController = require("../controllers/studentController");

router.post("/register", studentMiddlewares.validteRegistration, studentController.registerStudent);

router.post("/login", studentMiddlewares.validateLogin, studentController.loginStudent);

router.post("/logout", studentController.logout);

module.exports = router;