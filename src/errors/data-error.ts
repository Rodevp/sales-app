export class DataIsNotValidError extends Error {

    private StatusCode: Number;

    constructor(message: string, statusCode: Number = 400) {
        super(message)
        this.StatusCode = statusCode
    }
    
}