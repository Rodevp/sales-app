export class RepositoryError extends Error {

    private StatusCode: Number;

    constructor(message: string, statusCode: Number = 500) {
        super(message)
        this.StatusCode = statusCode
    }
    
}