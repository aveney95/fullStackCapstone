const express = require('express');
// const { getUserProfile, updateUserProfile } = require('../controllers/userControllers');
const userControllers = require('../controllers/userControllers');

const router = express.Router();

// Get user profile
// router.get('/:id', userControllers.getUserProfile);

// Update user profile
// router.put('/:id', updateUserProfile);

module.exports = router;
