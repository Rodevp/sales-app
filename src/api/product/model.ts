import { DataTypes } from 'sequelize'
import sequelize from '../../database'

export const Products = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(80)
    },
    price: {
        type: DataTypes.INTEGER
    },
    id_sale: {
        type: DataTypes.INTEGER
    },
    id_seller: {
        type: DataTypes.UUID
    }
})

