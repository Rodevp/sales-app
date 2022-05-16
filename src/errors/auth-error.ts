class CustomError extends Error {
  constructor(message: string) {
    super(message)
  }
}


export class UnauthenticatedError extends CustomError {
    private statusCode: Number;

    constructor(message: string, statusCode: Number = 403) {
        super(message);
        this.statusCode = statusCode
      }
}

