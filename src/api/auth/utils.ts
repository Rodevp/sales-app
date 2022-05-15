import { User } from "./types";
import { DataIsNotValidError } from '../../errors/data-error'

export const isTypeUser = (data: User) => {
    
    let keysObjectUser =  Object.keys(data)
    let keys = ['id', 'email', 'name', 'role', 'password']

    if (keysObjectUser.length === keys.length) {
        
        let containsAllTheKeys = keys.every( (value, i) => value === keys[i] ) 
        if (!containsAllTheKeys) throw new DataIsNotValidError('Datos no validos')

    } else {
        throw new DataIsNotValidError('Datos no validos')
    }
    

}