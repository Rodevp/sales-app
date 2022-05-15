export class DataIsNotValidError extends Error {

    private statusCode: Number;

    constructor(message: string, statusCode: Number = 400) {
        super(message)
        this.statusCode = statusCode
    }
    
}