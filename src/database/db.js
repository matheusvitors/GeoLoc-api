import Sequelize from 'sequelize';
import 'dotenv/config'

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

let sequelize = null;

console.log(process.env.DB_NAME);

if(process.env.NODE_ENV.trim() === 'production') {
	// const options = {
	// 	dialect: 'mysql',
	// 	host: dbHost,
	// 	ssl: 'Amazon RDS',
	// 	logging: false
	// }

	// sequelize = new Sequelize(dbName, dbUser, dbPassword, options);

} else {
	const options = {
		dialect: 'sqlite',
		storage:  process.env.DATABASE_URL,
		// storage:  process.env.DATABASE_URL,
		logging: false
	}

	sequelize = new Sequelize(options);

}

export default sequelize;
