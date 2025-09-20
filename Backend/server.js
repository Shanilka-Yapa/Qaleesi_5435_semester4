require('dotenv').config();
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

// Import routes
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const joinRoutes = require('./routes/joinRoutes');
const creativeRoutes = require('./routes/creativeRoutes');

//use routes
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/join', joinRoutes);
app.use('/api/creative', creativeRoutes);

// Example test route
app.get('/', (req, res) => {
    res.send('Backend is running 🚀');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

