import { INTEGER, STRING, DATE } from 'sequelize';
import db from '../db.js';
import Rota from './Rota.js';

const Coordenada = db.define('coordenada', {
	id: {
		type: INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},

	latitude: {
		type: STRING,
	},

	longitude: {
		type: STRING,
	},

	timestamp: {
		type: DATE
	},

	rotaId: {
		type: INTEGER,
		allowNull: false,
	}

});


Coordenada.sync();

export default Coordenada;
