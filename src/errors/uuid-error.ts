import {  FAILED_RESPONSES  } from '../helpers/http'

export class UuidError extends Error {

    private statusCode: Number;

    constructor(message: string, statusCode: Number = FAILED_RESPONSES.BAD) {
        super(message)
        this.statusCode = statusCode
    }
    
}