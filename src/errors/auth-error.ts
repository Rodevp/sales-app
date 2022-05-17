import {  AUTHENTICATION_RESPONSES  } from '../helpers/http'


export class UnauthenticatedError extends Error {
    private statusCode: Number;

    constructor(message: string, statusCode: Number = AUTHENTICATION_RESPONSES.NOT_AUTHORIZED) {
        super(message);
        this.statusCode = statusCode
      }
}

