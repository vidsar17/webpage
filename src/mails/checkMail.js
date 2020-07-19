const nodeMailer = require('nodemailer');
const helper = require('../helpers/helpers');
const help = new helper();

const cod = help.generateCode();

class SendMails {

    newMailDelivery(){

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
            text: `Por favor ingrese este código: ${cod}`
        };

        trasporter.sendMail(mailDestination, function (error, info) {
            if (error) console.log(`Error !!!: ${error}`);
            if (info) console.log(`Mail send: ${info}`);
        });
    };
}
module.exports = SendMails;

