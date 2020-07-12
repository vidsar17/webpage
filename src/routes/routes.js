import express from 'express';
const router = express.Router();
const db_pool = require('../dbConection');
const sendMail = require('../mails/checkMail')
    //const Component = require('../client/index.js');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Component = require('../client/component/login/Login')

router.get('/', (req, res) => {

    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );

    sendMail.configShipping();
    res.send(html);

});

router.get('/Api', async(req, res) => {

    const user = await db_pool.query(`select * from eludumdb.usuarios`);

    res.send(user);
})

module.exports = router;