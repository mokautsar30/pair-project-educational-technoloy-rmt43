const UserController = require("../Controllers/UserController");
const express = require('express')
const router = express.Router();

router.get(`/`, UserController.login);

router.post(`/`, UserController.loginPost);

module.exports = router;
