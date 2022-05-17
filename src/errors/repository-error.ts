import {  SERVER_RESPONSES  } from '../helpers/http'

export class RepositoryError extends Error {

    private StatusCode: Number;

    constructor(message: string, statusCode: Number = SERVER_RESPONSES.INTERNAL_ERROR) {
        super(message)
        this.StatusCode = statusCode
    }
    
}