import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/config.js';

interface UserAttributes {
	userId: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phone?: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'phone'> {}

class User
	extends Model<UserAttributes, UserCreationAttributes>
	implements UserAttributes
{
	public userId!: string;
	public firstName!: string;
	public lastName!: string;
	public email!: string;
	public password!: string;
	public phone?: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

User.init(
	{
		userId: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: {
					msg: 'Must be a valid email address',
				},
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		tableName: 'users',
	}
);

export default User;
