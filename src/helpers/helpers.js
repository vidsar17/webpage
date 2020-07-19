class AuxFunction {

    //genero el código:
    generateCode() {
        //let num = new Uint32Array(1);
        //return window.crypto.getRandomValues(num);
        let random = Math.random();
        let numStr = random.toString();

        return numStr.substr(14);
    } 

};

module.exports = AuxFunction;