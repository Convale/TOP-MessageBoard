const express = require("express");

const router = express.Router();

// controllers
const indexController = require("../controllers/indexController");
const messageController = require("../controllers/messageController");
const registrationController = require("../controllers/registrationController");

// GET home page
router.get("/", indexController.index);

// GET login page
router.get("/login", indexController.login_get);

// POST login page
router.post("/login", indexController.login_post);

// GET logout page
router.get("/logout", indexController.logout_get);

// GET registration page
router.get("/register", registrationController.newUser_get);

// POST registration page
router.post("/register", registrationController.newUser_post);

// GET newMessage page
router.get("/newMessage", messageController.newMessage_get);

// POST newMessage page
router.post("/newMessage", messageController.newMessage_post);

// POST deleteMessage page
router.post("/:messageID/deleteMessage", messageController.deleteMessage_post);

module.exports = router;
