const UserController = require("../Controllers/UserController");
const express = require('express')
const router = express.Router();

router.get(`/`, UserController.logout);

module.exports = router;
