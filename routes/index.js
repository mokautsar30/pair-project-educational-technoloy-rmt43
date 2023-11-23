const HomeController = require("../Controllers/HomeController");
const express = require('express')
const router = express.Router();


router.get(`/`, HomeController.home);

router.use(`/register`, require(`./registerRoutes`));

router.use(`/login`, require(`./loginRoutes`));

router.use(`/logout`, require(`./logoutRoutes`));

// router.use(`/cars`, require(`./carRoutes`));

// router.use(`/profiles`, require(`./userProfileRoute`))





module.exports = router;
