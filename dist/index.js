var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/database.js';
import userRoute from './routes/auth.js';
dotenv.config();
connectDb();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDb();
app.use(userRoute);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('jjj');
    // try {
    // 	const users = await User.findAll();
    // 	res.json(users);
    // } catch (error) {
    // 	res.status(500).json({ error: 'Failed to fetch data' });
    // }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
