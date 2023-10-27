const Express = require('express');
const { loginUser, registerUser } = require('../Controllers/Auth.controller.js')
// import Express from "express";
// import { loginUser, registerUser } from "../Controllers/Auth.controller.js";


const router = Express.Router();

//routes
router.post('/register', registerUser)
router.post('/login', loginUser)


module.exports = router