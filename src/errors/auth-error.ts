export class UnauthenticatedError extends Error {
    private statusCode: Number;

    constructor(message: string, statusCode: Number = 403) {
        super(message);
        this.statusCode = statusCode
      }
}

