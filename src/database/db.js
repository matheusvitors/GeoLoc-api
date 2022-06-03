import Sequelize from 'sequelize';

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const options = process.env.NODE_ENV ===  'dev' ?
	{
		dialect: 'sqlite',
		storage: './db/database.sqlite',
		logging: false
	} :
	{
		dialect: 'mysql',
		host: process.env.DB_HOST
	}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, options);

export default sequelize;
