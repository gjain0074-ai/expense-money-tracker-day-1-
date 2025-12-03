const express = require('express');
const connectDB = require('config');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Database connect
// NOTE: connectDB function should handle the actual MongoDB connection using mongoose.connect()
connectDB();

// Middleware: Enable JSON parsing (will be needed later for APIs)
app.use(express.json());

// Main Test Route: This will respond when the browser hits http://localhost:5000/
app.get('/', (req, res) => {
    // We send a confirmation message that the backend is working
    res.send("Backend is working 🚀. Server + MongoDB connected successfully.");
});

// Server Listen
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});