import { User, UserLogin } from './types'
import { RepositoryUser } from './repository'
import { test as validateUUID } from 'uuid-random'
import { generateHash, comparePassword } from '../../helpers/encrypt'
import { isTypeUser } from './utils'
import { createJWT } from '../../helpers/token'

//errors
import {  DataIsNotValidError } from '../../errors/data-error'
import { RepositoryError } from '../../errors/repository-error'
import { UuidError } from '../../errors/uuid-error'
import { BadRequestsError } from '../../errors/bad-requests'
import { UnauthenticatedError } from '../../errors/auth-error'

export const validateDataService = ( data: User ) => {
    
    let values = Object.values(data)
    let isValidValues = values.every( value => value.length > 0 )
    let everyValuesStrings = values.every( value => typeof value === 'string' )

    isTypeUser(data)

    if (!everyValuesStrings) throw new DataIsNotValidError('Valores no validos')

    if (!isValidValues) throw new DataIsNotValidError('No puede haber campos vacios')


}


export const saveUserService = async (user: User) => {

    const repository = new RepositoryUser()
    let response;

    if ( !validateUUID(user.id) ) throw new UuidError('id no valido')

    if (typeof user.password !== 'string' || user.password.length < 6 ) 
            throw new DataIsNotValidError('contraseña no valida')

    const userIsExists: any = await repository.getByEmail(user.email)
    
    if (userIsExists) throw new BadRequestsError('El usuario ya existe')

    const userParser = {
        ...user,
        password: await generateHash(user.password)
    }

    try {
        response = await repository.save(userParser)
    } catch (error) {
        throw new RepositoryError('No se ha podido guardar')
    }

    return response

}


export const loginService = async (user: UserLogin) => {
    
    const { email, password } = user
    const repository = new RepositoryUser()
  
    if (!email || !password) {
      throw new BadRequestsError('Contraseña o email no validos')
    }

    const response: any = await repository.getByEmail(email)

    if (!response) {
      throw new UnauthenticatedError('usuario no encontrado')
    }

    const isPasswordCorrect = await comparePassword(password, response.password)

    if (!isPasswordCorrect) {
      throw new UnauthenticatedError('Credenciales no validas')
    }

    const userResponse = {
        id: response.id,
        email: response.email
    }

    return {
        user: userResponse,
        token: createJWT(user)
    }

}
