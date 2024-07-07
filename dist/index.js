import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.status(200).send('hello world');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
