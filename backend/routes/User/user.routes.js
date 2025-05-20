const express = require("express");
const { protect } = require("../../middleware/authMiddleware");
const { getProfile, updateProfile, getAllUsers } = require("../../controllers/User/user.controller");

const router = express.Router();

router.get("/me", protect, getProfile);
router.put("/me", protect, updateProfile);
router.get("/all", protect, getAllUsers); // admin only

module.exports = router;
