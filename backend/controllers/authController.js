const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const User = require("../models/User");
const Role = require("../models/Role");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../config/config.env") });

// Create Role
exports.createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const role = new Role({ name });
    await role.save();
    res.json({ message: "Role created successfully", role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Signup
exports.signup = async (req, res) => {
  try {
    const { role, email, firstName, lastName, password } = req.body;
    const roleData = await Role.findOne({ name: role });
    if (!roleData) return res.status(400).json({ error: "Role not found" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      role: roleData._id,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.json({ message: "User registered successfully", user });
  } catch (err) {
    if (err.code === 11000 && err.keyPattern?.email) {
      return res.status(409).json({
        error: "Email already exists!"
      });
    }

    res.status(400).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { role, email, password } = req.body;
    const roleData = await Role.findOne({ name: role });
    if (!roleData) return res.status(400).json({ error: "Role not found" });

    const user = await User.findOne({ email, role: roleData._id });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: roleData.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// ---------------------------------------------
// Logout (Client-side JWT)
// ---------------------------------------------
exports.logout = async (req, res) => {
  try {
    // JWT logout is client-handled; you can optionally track blacklisted tokens.
    // For now, just instruct client to remove it.
    res.json({ message: "Logout successful. Please clear token on client side." });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ---------------------------------------------
// Delete User
// ---------------------------------------------
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ message: "User deleted successfully", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ---------------------------------------------
// Delete Role
// ---------------------------------------------
exports.deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    const role = await Role.findByIdAndDelete(id);
    if (!role) return res.status(404).json({ error: "Role not found" });

    res.json({ message: "Role deleted successfully", role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all users with count
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("role", "name");
    const totalUsers = await User.countDocuments();

    res.json({
      success: true,
      totalUsers,
      users
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Get single user by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("role", "name");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// ---------------------------------------------
// Update User
// ---------------------------------------------
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, role, firstName, lastName } = req.body;

    const updateData = {};

    // ✅ Update email
    if (email) {
      updateData.email = email;
    }

    // ✅ Update first & last name
    if (firstName) {
      updateData.firstName = firstName;
    }

    if (lastName) {
      updateData.lastName = lastName;
    }

    // ✅ Update password
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // ✅ Update role
    if (role) {
      const roleData = await Role.findOne({ name: role });
      if (!roleData) {
        return res.status(400).json({ error: "Role not found" });
      }
      updateData.role = roleData._id;
    }

    // ✅ Update user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData },   // ⬅️ IMPORTANT
      { new: true, runValidators: true }
    ).populate("role", "name");

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // ❌ Hide password in response
    const userResponse = updatedUser.toObject();
    delete userResponse.password;

    res.json({
      message: "User updated successfully",
      user: userResponse
    });

  } catch (err) {
    // ✅ Duplicate email handling
    if (err.code === 11000 && err.keyPattern?.email) {
      return res.status(409).json({
        error: "Email already exists!"
      });
    }

    res.status(500).json({ error: err.message });
  }
};

// ---------------------------------------------
// Update Role
// ---------------------------------------------
exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) return res.status(400).json({ error: "Role name is required" });

    const updatedRole = await Role.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedRole) return res.status(404).json({ error: "Role not found" });

    res.json({ message: "Role updated successfully", role: updatedRole });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ---------------------------------------------
// Get All Roles
// ---------------------------------------------
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json({ message: "Roles fetched successfully", roles });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ---------------------------------------------
// Get Single Role by ID
// ---------------------------------------------
exports.getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findById(id);
    if (!role) return res.status(404).json({ error: "Role not found" });

    res.json({ message: "Role fetched successfully", role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};