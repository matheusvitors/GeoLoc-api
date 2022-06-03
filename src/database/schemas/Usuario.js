import { STRING, INTEGER } from 'sequelize';
import db from '../db.js';
import Rota from './Rota.js';

const Usuario = db.define('usuario', {
	id: {
		type: INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},

	matricula: {
		type: STRING,
		allowNull: false
	},

	password: {
		type: STRING,
		allowNull: false
	}
});

// Usuario.sync();

Usuario.hasMany(Rota, {foreignKey: 'usuarioId', onDelete: 'cascade', as: 'rotas'});
Rota.belongsTo(Usuario, {foreignKey: 'usuarioId'});

export default Usuario;
