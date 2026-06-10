const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { activePage: 'home' });
});
// Project Routesrouter.get('/', (req, res) => res.render('index', { activePage: 'home' }));
router.get('/cv', (req, res) => res.render('cv', { activePage: 'cv' }));
router.get('/about', (req, res) => res.render('about', { activePage: 'about' }));
router.get('/projects', (req, res) => res.render('projects', { activePage: 'projects' }));
router.get('/projects/assembler', (req, res) => res.render('assembler', { activePage: 'projects' }));
router.get('/projects/stock-predictor', (req, res) => res.render('stock-predictor', { activePage: 'projects' }));
router.get('/projects/simon-game', (req, res) => res.render('simon-game', { activePage: 'projects' }));

module.exports = router;