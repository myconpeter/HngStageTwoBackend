var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, firstName, lastName, email, password, phone } = req.body;
    try {
        const existingUser = yield User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(422).json({
                errors: [{ field: 'email', message: 'Email already in use' }],
            });
        }
        const hashedPassword = yield bcrypt.hash(password, 10);
        const newUser = yield User.create({
            userId,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone,
        });
        res.status(201).json({
            message: 'User registered successfully',
            user: newUser,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
});
export { registerUser };
