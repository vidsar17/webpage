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

router.get('/login', (req, res) => {

    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );

    res.send(html);

});

router.get('/getUser:dato', (req,res) => {
    //var datos = req.params.data;
    var datos = req.params;

    console.log('sale:', datos);
    
    var arrayDeCadenas = datos.split(',');
    var usuario = arrayDeCadenas[0];
    var password = arrayDeCadenas[1];
    

    let cryp = help.creatHash(password, usuario);

    if (cryp == true) {
        res.send('usuario correcto');
    } else {
        res.send('error en los datos')
    }

    console.log(`Usuario: ${usuario}, Clave: ${password}`);

    res.json(`Usuario: ${usuario}, Clave: ${password}`);
});


router.get('/Api', async (req, res) => {
    const user = await db_pool.query(`select * from eludumdb.usuarios`);
    console.log(user);
    res.send(user);
})

router.post('/captureCod', async (req, res) => {
    gb.varGlobales.codigo = await {num : req.body.numero};
    res.json(gb.varGlobales.codigo);
});

router.post('/setNewUser', async (req, res) => {
    let num = help.generateCode(); 
    
    //correo.newMailDelivery();
    
    console.log('es: ', gb.varGlobales.codigo) 
    const newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nac: req.body.nacimiento,
        pass: req.body.pass,
        mail: req.body.mail,
        rol: req.body.rol
    } 

    //Si los codigos son iguales inserto el nuevo usuario:
    if (num == newUser.codigo){
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
});

module.exports = router;