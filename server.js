const express = require('express');
const app = express();

// הגדרת מנוע התבניות
app.set('view engine', 'ejs');

// חשיפת קבצים סטטיים (כל התמונות בתיקיית public)
app.use(express.static('public'));

// --- נתיבי האתר (Routes) ---

// דף הבית
app.get('/', (req, res) => {
    res.render('index', { activePage: 'home' });
});

// דף קורות חיים
app.get('/cv', (req, res) => {
    res.render('cv', { activePage: 'cv' });
});

// דף אודות
app.get('/about', (req, res) => {
    res.render('about', { activePage: 'about' });
});

// --- הפעלת השרת ---
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`🚀 The complete portfolio is LIVE on port ${PORT}!`);
    console.log(`--> Go to http://localhost:${PORT}`);
});

server.on('error', (err) => {
    console.error('🔴 FATAL ERROR:', err.message);
});