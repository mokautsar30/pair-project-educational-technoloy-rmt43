const UserController = require("../Controllers/UserController");
const express = require('express')
const router = express.Router();

const notLogged = function (req, res, next) {
    console.log(req.session)
    if(req.session.userRole){
      const err = `You are already Registered`
      res.redirect(`/login?error=${err}`)
    } else {
      next()
    }
  } 

router.get(`/`, notLogged, UserController.register);
router.post(`/`, UserController.registerPost);

module.exports = router;
