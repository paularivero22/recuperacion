
class ValidacionError extends Error {
    mensaje;
    nombreCampo;
    
    constructor(message, nombreCampo) {
        super(message);
        this.nombreCampo = nombreCampo;
    }
}

export default ValidacionError;