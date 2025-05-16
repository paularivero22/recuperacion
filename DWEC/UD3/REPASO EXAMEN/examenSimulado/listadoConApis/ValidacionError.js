export class ValidacionError extends Error{
    constructor(mensaje, errorOriginal) {
        super(mensaje);
        this.name = "ValidacionError";
        this.errorOriginal = errorOriginal;
    }
}