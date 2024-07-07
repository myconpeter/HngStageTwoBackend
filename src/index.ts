import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDb from './config/database.js';
import User from './models/User.js';

import userRoute from './routes/auth.js';

dotenv.config();
connectDb();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDb();

app.use(userRoute);

app.get('/', async (req: Request, res: Response) => {
	res.send('jjj');
	// try {
	// 	const users = await User.findAll();
	// 	res.json(users);
	// } catch (error) {
	// 	res.status(500).json({ error: 'Failed to fetch data' });
	// }
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
