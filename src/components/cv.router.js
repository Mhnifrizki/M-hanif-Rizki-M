// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middleware/upload');

router.post('/user', upload.single('image'), userController.createUser); // Upload gambar dan buat user baru
router.get('/user, userController.getAllusers'); // Ambil semua user
router.get('/user, userController.getUser'); // Ambil user berdasarkan ID

module.exports = router;