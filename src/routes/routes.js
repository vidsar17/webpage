import express from 'express';
const router = express.Router();
import db_pool from '../dbConection.js'; //ver si realmente esta conectado a la base de datos!


router.get('/', (req, res) => {
    res.send('Hello world');
});

router.get('/Api', (req, res) => {
    res.json({api: 'hello api'});
})

module.exports = router;