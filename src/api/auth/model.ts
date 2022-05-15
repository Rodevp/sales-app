import { DataTypes } from 'sequelize'
import sequelize from '../../database'

export const Users = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50)
    },
    email: {
        type: DataTypes.STRING(100),
    },
    role: {
        type: DataTypes.ENUM('admin', 'seller')
    },
    password: {
        type: DataTypes.STRING
    }
})