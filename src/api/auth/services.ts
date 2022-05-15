import { User } from './types'
import {  DataIsNotValidError } from '../../errors/data-error'
import { RepositoryError } from '../../errors/repository-error'
import { ReposotoryUser } from './repository'

const validateData = ( data: User ) => {
    
    let values = Object.values(data)
    let isValidValues = values.every( value => value.length > 0 )
    let everyValuesStrings = values.every( value => typeof value === 'string' )

    if (!everyValuesStrings) throw new DataIsNotValidError('Valores no validos')

    if (!isValidValues) throw new DataIsNotValidError('No puede haber campos vacios')

}


const saveUserService = (user: User) => {

    const repository = new ReposotoryUser()
    let response;

    try {
        response = repository.save(user)
    } catch (error) {
        console.error('error del repository')
        throw new RepositoryError('No se ha podido guardar')
    }

}


export default {
    validateData,
    saveUserService
}