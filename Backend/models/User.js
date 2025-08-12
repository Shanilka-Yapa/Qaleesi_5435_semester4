const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    // Only hash if password is new or modified
    if (!this.isModified('password')) return next();

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
});

// Method to compare passwords later
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
