import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const registerUser = async (req: Request, res: Response) => {
	const { userId, firstName, lastName, email, password, phone } = req.body;

	try {
		const existingUser = await User.findOne({ where: { email } });
		if (existingUser) {
			return res.status(422).json({
				errors: [{ field: 'email', message: 'Email already in use' }],
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await User.create({
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
	} catch (error) {
		res.status(500).json({ error: 'Failed to register user' });
	}
};

export { registerUser };
