/* eslint-disable func-names */
const express = require("express");

const router = express.Router();

// Require controller modules.
const indexController = require("../controllers/indexController");

// GET home page
router.get("/", indexController.index);

// GET new page
router.get("/new", indexController.new_get);

// GET new page
router.post("/new", indexController.new_post);

module.exports = router;
