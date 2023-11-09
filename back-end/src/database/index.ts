'use strict';

require('dotenv').config();
/* eslint-disable global-require */
const path = require('path');
const Sequelize = require('sequelize');
const configPath = path.join(__dirname, './config/config.ts');
const env = process.env.NODE_ENV || 'development';
const config = require(configPath)[env];
const db: any = {};

let sequelize: any;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

function auth() {
    try {
        sequelize.authenticate();
        // eslint-disable-next-line no-console
        console.log('Banco de dados conectado com sucesso!');
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default { db, auth };
