import { Sequelize } from 'sequelize'
import config_db from './config/db'

const sequelize = new Sequelize(`${config_db.NAME}`, `${config_db.USER}`, `${config_db.PASSWORD}`, {
    host: config_db.HOST,
    dialect: 'postgres'
});

export default sequelize