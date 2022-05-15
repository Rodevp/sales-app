import jwt from 'jsonwebtoken'
import token_config from '../config/auth'

export const createJWT = (data: any) => {
    return jwt.sign(
        data,
        'a',
        {
          expiresIn: '1h',
        }
    )
}