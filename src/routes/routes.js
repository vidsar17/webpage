const express = require('express');
const router = express.Router();
const db_pool = require('../dbConection');
const sendMail = require('../mails/checkMail')
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('../client/component/login/Login')

//Funciones auxiliares:
function sendToken(){
    let num = sendMail.configShipping();
    return num
}

function validateMail(){
    if (number == sendToken()) {
        //guardo los datos del nuevo usuario
        //else mando mensaje de error
        console.log('guardar datos')
    };
}

router.get('/', (req, res) => {

    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );

    //sendMail.configShipping();
    res.send(html);

});

router.get('/getUser:dato', (req,res) => {

    var datos = req.params.dato;
    var arrayDeCadenas = datos.split(',');
    var usuario=arrayDeCadenas[0];
    var password=arrayDeCadenas[1];

    res.json(usuario);
    
    console.log(`Usuario: ${usuario}, Clave: ${password}`);
});


router.get('/Api', async(req, res) => {

    const user = await db_pool.query(`select * from eludumdb.usuarios`);

    res.send(user);
})

module.exports = router;