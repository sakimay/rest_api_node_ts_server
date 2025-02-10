import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const db = new Sequelize(DATABASE_URL,{
    dialectOptions: {
        ssl: {
            require: true,
        }
    },
    models: [__dirname + '/../models/**/*.ts'],
});

export default db;