import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const dbConnectionString = process.env.DB_CONNECTION_STRING;
if (!dbConnectionString) {
    throw new Error('DB_CONNECTION_STRING environment variable is not defined');
}
const sequelize = new Sequelize(dbConnectionString);
export default sequelize;
