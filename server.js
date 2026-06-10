const express = require('express');
const helmet = require('helmet');
const app = express();
const rateLimit = require('express-rate-limit');

// Configure rate limiting to prevent brute-force and DoS attacks
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes.',
    skip: (req, res) => req.url.startsWith('/public') || req.url.match(/\.(jpg|jpeg|png|gif|svg|css|js)$/)
});

const routes = require('./routes');
app.use('/', routes);

// Apply rate limiting and security headers
app.use(limiter);
app.use(helmet());

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// --- Server Startup ---
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
    console.log(`🚀 The complete portfolio is LIVE on port ${PORT}!`);
    console.log(`--> Go to http://localhost:${PORT}`);
});

// Handle server startup errors
server.on('error', (err) => {
    console.error('🔴 FATAL ERROR:', err.message);
});