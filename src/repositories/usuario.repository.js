import Usuario from "../database/schemas/Usuario.js";
import Rota from "../database/schemas/Rota.js";
import Coordenada from "../database/schemas/Coordenada.js";

export class UsuarioRepository {
	async list() {
		return await Usuario.findAll({
			include: [{ model: Rota, as: 'rotas',
				include: [{ model: Coordenada, as: 'coordenadas'}]
			}]
		});
	}

	async get(id) {
		return await Usuario.findByPk(id, {
			include: [{ model: Rota, as: 'rotas',
				include: [{ model: Coordenada, as: 'coordenadas'}]
			}]
		})
	}

	async find(field, value) {
		return await Usuario.findOne({ where: { [field]: value }})
	}

	async create(usuario){
		return await Usuario.create(usuario);
	}

	async remove(id) {
		return await Usuario.destroy({ where: { id } });
	}

	async destroyAll() {
		return await Usuario.sync({ force: true });
	}
}
