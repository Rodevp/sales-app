import jwt from 'jsonwebtoken'
import token_config from '../config/auth'

export const createJWT = (data: any) => {
    return jwt.sign(
        data,
        `${token_config.JWT_SECRET}`,
        {
          expiresIn: '1h',
        }
    )
}