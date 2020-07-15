const nodeMailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const SMTPConnection = require('nodemailer/lib/smtp-connection');

//genero el código:
function generateCode(){
    //let num = new Uint32Array(1);
    //return window.crypto.getRandomValues(num);
    let alea = Math.random();
    return alea
} 

function newMailDelivery(){
    //objeto Transporter: realiza la conexión con el servidor de correo
    
    const trasporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'eLudumJuego@gmail.com',
            pass: 'eSieteLudum??'
        },
        tls: {rejectUnauthorized: false}
    });
    
    const mailDestination = {
        from: 'eLudumJuego@gmail.com',
        to: 'vangel338@gmail.com',
        subject: 'Código de comprobación e-Ludum',
        text: `Por favor ingrese este código: ${generateCode()}`
    };

    trasporter.sendMail(mailDestination, function (error, info) {
        if (error) console.log(`Error !!!: ${error}`);
        if (info) console.log(`Mail send: ${info}`);
    });
};

module.exports = newMailDelivery();

