import { INTEGER } from 'sequelize';
import db from '../db.js';
import Coordenada from './Coordenada.js';

const Rota = db.define('rota', {
	id: {
		type: INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},

	usuarioId: {
		type: INTEGER,
		allowNull: false,
	}

});

Rota.hasMany(Coordenada, {foreignKey: 'rotaId', onDelete: 'cascade'})
Coordenada.belongsTo(Rota, {foreignKey: 'rotaId'})

Rota.sync();

export default Rota;
