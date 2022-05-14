import dotenv from 'dotenv'
dotenv.config()

export default {
    HOST: process.env.HOST_DB,
    PASSWORD: process.env.PASSWORD_DB,
    NAME: process.env.DB_NAME,
    USER: process.env.USER_DB
}


