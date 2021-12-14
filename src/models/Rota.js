const Sequelize = require('sequelize');
const db = require('../database/db');

const Rota = db.define('rota', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
});

Rota.sync();

module.exports = Rota;
