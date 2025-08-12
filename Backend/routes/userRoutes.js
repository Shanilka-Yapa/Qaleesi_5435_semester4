const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs'); // use bcrypt if installed

// Register new user
router.post('/register', async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;

        // Simple duplicate email check
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const newUser = new User({ firstname, lastname, username, email, password });
        await newUser.save();

        res.json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Login user

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        let isMatch;

        // Check if stored password is hashed
        if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
            // Compare with bcrypt
            isMatch = await bcrypt.compare(password, user.password);
        } else {
            // Compare plain text for old users
            isMatch = password === user.password;

            // If correct, hash & save so it's secure next time
            if (isMatch) {
                const hashed = await bcrypt.hash(password, 10);
                user.password = hashed;
                await user.save();
            }
        }

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.json({ message: 'Login successful', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error logging in' });
    }
});

//delete account
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update username
router.put('/:id', async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
