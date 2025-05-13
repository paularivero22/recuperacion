
class AplicacionError extends Error {
    mensaje;
    error;
    
    constructor(message, errorOriginal) {
        super(message);
        this.error = errorOriginal;
    }
}

export default AplicacionError;