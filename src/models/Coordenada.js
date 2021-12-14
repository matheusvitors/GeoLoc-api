const Sequelize = require('sequelize');
const db = require('../database/db');

const Coordenada = db.define('coordenada', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},

	latitude: {
		type: Sequelize.STRING,
	},

	longitude: {
		type: Sequelize.STRING,
	},

	timestamp: {
		type: Sequelize.DATE
	},

});


Coordenada.sync();

module.exports = Coordenada;
