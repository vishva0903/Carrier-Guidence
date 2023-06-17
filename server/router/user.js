const express = require("express");
const router = express.Router();
const UserController = require("../controller/user");


// POST request for creating a new user.
router.post("/signup", UserController.signup);

// GET request for user login.
router.post("/signin", UserController.signin);
router.post('/auth', UserController.verifyToken)
router.get(`/getuser/:id`,UserController.getUser)




module.exports = router;