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
});

// Rota.associate = function(models) {
// 	Rota.hasMany(models.Coordenada,
// 		{foreignKey: 'rotaId', as: 'coordenada', onDelete: 'CASCADE' });
// 	// Rota.belongsTo(models.Usuario, {foreignKey: usuarioId, as: 'usuario'})
// }

Rota.hasMany(Coordenada, {foreignKey: 'rotaId'})
Coordenada.belongsTo(Rota, {foreignKey: 'rotaId'})

Rota.sync();

export default Rota;
