const express = require('express');
const router = express.Router();
const db_pool = require('../dbConection');
const sendMail = require('../mails/checkMail')
const helper = require('../helpers/helpers');
const global = require('../helpers/globales');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('../client/component/login/Login')
const bcrypt = require('bcrypt');
const help = new helper(); 
const correo = new sendMail();
const gb = new global();

router.get('/home', (req, res)=> {

    res.send('hola');
    //res.json({saludo: 'Hellow from HOME!!'});
});

router.post('/getUser', (req,res) => {
    var datos = req.body;

    res.json({'ok': 'datos entregados'});

    //let cryp = help.creatHash(datos.user, datos.pass);

    console.log(`Usuario: ${datos.user}, Clave: ${datos.pass}`);

});


router.get('/Api', async (req, res) => {
    const user = await db_pool.query(`select * from eludumdb.usuarios`);
    console.log(user);
    res.send(user);
})

router.post('/sendMail', async (req, res) => {
    const cod = help.generateCode();
    const mailCod = req.body;

    console.log(mailCod.mail);
    
    await correo.newMailDelivery(mailCod.mail, cod);
    
    gb.varGlobales.codigo = cod;

    console.log('es: ', gb.varGlobales.codigo); 
});

router.post('/captureCod', async (req, res) => {
    gb.varGlobales.codigo = await {num : req.body.numero};
    res.json(gb.varGlobales.codigo);
});

router.post('/setNewUser', async (req, res) => {

    var dataNewUser = req.body;
    var num = parseInt(dataNewUser.code);
    var cod = parseInt(gb.varGlobales.codigo);

    console.log('New user: ', dataNewUser);

    if (cod === num ){
        console.log('Son iguales');
        const password = await bcrypt.hash(newUser.pass, 10);

        let nombre_usuario =  newUser.nombre
        let apellido_usuario = newUser.apellido
        let fecha_nacimiento = newUser.nac
        let mail = newUser.mail
        let rol_usuarios_id_rol_usuarios = newUser.rol

        try {
            const setInsert = {nombre_usuario, apellido_usuario, fecha_nacimiento, password, mail, rol_usuarios_id_rol_usuarios}
            await db_pool.query('insert into eludumdb.usuarios set ?', [setInsert]);
            
            res.send('usuario guardado correctamente');
            // hay que ver como evitar usuarios duplicados
        
        } catch(e) {
            res.status(500).send(`Error: ${e}`);
        }
    } else {
        res.send('El numero ingresado no es válido. Por favor, vuelva a intentarlo!');
    }
        console.log('No son iguales');

});

module.exports = router;