import express from 'express';
const router = express.Router();
const db_pool = require('../dbConection'); 
//const Component = require('../client/index.js');
const sendMail = require('../mails/checkMail')

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Component = require('../client/component/login/Login')

router.get('/', (req, res) => {
    
    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );

    //envio mails:
    sendMail

    res.send(html);
});

router.get('/Api', async (req, res) => {

    const user = await db_pool.query(`select * from eludumdb.usuarios`);

    res.send(user);
})

module.exports = router;