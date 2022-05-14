import { DataTypes } from 'sequelize'
import sequelize from '../../database'
import { Sales } from '../sales/model'

export const Sellers = sequelize.define('sellers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(80)
    },
    id_sale: {
        type: DataTypes.INTEGER
    },
})

Sellers.hasMany(Sales, {
    foreignKey: 'id_seller'
})