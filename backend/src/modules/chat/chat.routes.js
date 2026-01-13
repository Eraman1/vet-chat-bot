const express = require("express");
const router = express.Router();
const { handleChat } = require("./chat.controller");

router.post("/", handleChat);

module.exports = router;
