// controllers/userController.js
const User = require('../models/User');
const fs = require('fs');
const path = require('path');

// Create new user
exports.createUser = async (req, res) => {
  const { name, email, biodata } = req.body;
  const imageUrl = req.file ? /uploads/${req.file.filename} : null;

  try {
    const user = await User.create({ name, email, biodata, imageUrl });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

// Get single user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};