const User = require("../models/User");
const bcrypt = require("bcryptjs");

// @desc Get profile
exports.getProfile = async (req, res) => {
    res.status(200).json(req.user);
};

// @desc Update profile
exports.updateProfile = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findById(req.user._id);

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = await bcrypt.hash(password, 10);

        await user.save();
        res.json({ message: "Profile updated", user });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// @desc Get all users (admin only)
exports.getAllUsers = async (req, res) => {
    if (req.user.role !== "admin") return res.status(403).json({ message: "Forbidden" });
    const users = await User.find().select("-password");
    res.json(users);
};
