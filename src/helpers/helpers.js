const bcrypt = require('bcrypt');
const db_pool = require('../dbConection');

class AuxFunction {

    //genero el código:
    generateCode() {
        let random = Math.random();
        let numStr = random.toString();

        return numStr.substr(14);
    }; 

    creatHash (pass, mail) {
        const user = db_pool.query(`select * from eludumdb.usuarios where mail = ?`, mail);

        if (user) {
            const validatePass = bcrypt.compare(pass, user.hash);
            if (validatePass) {
                return true
            } else {
                return false
            }
        } else {
            return false;
        }
    };

};

module.exports = AuxFunction;