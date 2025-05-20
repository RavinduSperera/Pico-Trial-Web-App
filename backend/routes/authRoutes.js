const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const { checkRole } = require("../middleware/roleMiddleware");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/admin", protect, checkRole("admin"), (req, res) => {
  res.json({ message: "Welcome Admin!" });
});

router.get("/user", protect, checkRole("user"), (req, res) => {
  res.json({ message: "Welcome User!" });
});

module.exports = router;
