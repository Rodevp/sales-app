import { DataTypes } from 'sequelize'
import sequelize from '../../database'
import { Products } from '../product/model'

export const Sales = sequelize.define('sales', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(80)
    },
    id_seller: {
        type: DataTypes.INTEGER,
    },
    value_sale: {
        type: DataTypes.INTEGER
    },
})

Sales.hasMany(Products, {
    foreignKey: 'id_sale'
})
