const express = require("express");

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
const { register, login, logout, currentUser } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);

module.exports = router;