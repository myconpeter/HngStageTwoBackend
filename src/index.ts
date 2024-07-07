import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
	res.status(200).send('hello world');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
