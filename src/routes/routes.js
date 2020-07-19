const express = require('express');
const router = express.Router();
const db_pool = require('../dbConection');
const sendMail = require('../mails/checkMail')
const helper = require('../helpers/helpers');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('../client/component/login/Login')
const help = new helper(); 
const correo = new sendMail();


router.get('/', (req, res) => {

    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );

    res.send(html);

});

router.get('/getUser:dato', (req,res) => {

    var datos = req.params.dato;
    var arrayDeCadenas = datos.split(',');
    var usuario=arrayDeCadenas[0];
    var password=arrayDeCadenas[1];

    res.json(`Usuario: ${usuario}, Clave: ${password}`);
    
    console.log(`Usuario: ${usuario}, Clave: ${password}`);
});


router.get('/Api', async (req, res) => {

    const user = await db_pool.query(`select * from eludumdb.usuarios`);
    console.log(user);
    res.send(user);
})

router.post('/captureCod', (req, res) => {
    const codigo = {num : req.body.numero};
    res.json(codigo.num);
});

router.post('/setNewUser', async (req, res) => {
    
    let num = help.generateCode();
    
    //correo.newMailDelivery();

    const newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nac: req.body.nacimiento,
        pass: req.body.pass,
        mail: req.body.mail,
        rol: req.body.rol
    } 

    /*
    if (num == newUser.codigo){
        res.send('ok');
    } else {
        res.send('El numero ingresado no es válido. Por favor, vuelva a intentarlo!');
    }
    */
    console.log('nombre', newUser.nombre);
    res.send(newUser.nombre);
});

module.exports = router;