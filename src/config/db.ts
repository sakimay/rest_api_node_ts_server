import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const db = new Sequelize(DATABASE_URL!,{
    models: [__dirname + '/../models/**/*.ts'],
    logging: false
});

export default db;