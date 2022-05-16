import { DataTypes } from 'sequelize'
import sequelize from '../../database'

export const Seller = sequelize.define('sellers', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(80)
    },
    email: {
        type: DataTypes.STRING(100)
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING(8)
    }
})

