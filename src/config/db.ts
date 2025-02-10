import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const db = new Sequelize(DATABASE_URL,{
    dialectOptions: {
        ssl: {
            require: true,
        }
    }   
});

export default db;