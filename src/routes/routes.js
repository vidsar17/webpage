import express from 'express';
const router = express.Router();
const db_pool = require('../dbConection'); //ver si realmente esta conectado a la base de datos!


router.get('/', (req, res) => {
    res.send('Hello world');
});

router.get('/Api', async (req, res) => {

    const user = await db_pool.query(`select * from eludumdb.usuarios`);
    
    res.send(user);
})

module.exports = router;