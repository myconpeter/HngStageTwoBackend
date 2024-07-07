import sequelize from './config.js';
import User from '../models/User';

const connectDb = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
		await sequelize.sync({ force: true }); // Set to true to recreate tables on each run
		console.log('All models were synchronized successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

export default connectDb;
