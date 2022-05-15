import { User } from './types'
import { ReposotoryUser } from './repository'
import { test as validateUUID } from 'uuid-random'

//errors
import {  DataIsNotValidError } from '../../errors/data-error'
import { RepositoryError } from '../../errors/repository-error'
import { UuidError } from '../../errors/uuid-error'
import { isTypeUser } from './utils'
import { generateHash } from '../../helpers/encrypt'

export const validateDataService = ( data: User ) => {
    
    let values = Object.values(data)
    let isValidValues = values.every( value => value.length > 0 )
    let everyValuesStrings = values.every( value => typeof value === 'string' )

    isTypeUser(data)

    if (!everyValuesStrings) throw new DataIsNotValidError('Valores no validos')

    if (!isValidValues) throw new DataIsNotValidError('No puede haber campos vacios')


}


export const saveUserService = async (user: User) => {

    const repository = new ReposotoryUser()
    let response;

    if ( !validateUUID(user.id) ) throw new UuidError('id no valido')

    if (typeof user.password !== 'string' || user.password.length < 6 ) 
            throw new DataIsNotValidError('contraseña no valida')

    const userParser = {
        ...user,
        password: await generateHash(user.password)
    }

    try {
        response = await repository.save(userParser)
    } catch (error) {
        console.error('error del repository')
        throw new RepositoryError('No se ha podido guardar')
    }

    return response

}
