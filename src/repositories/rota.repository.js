import Rota from "../database/schemas/Rota.js";
import Coordenada from "../database/schemas/Coordenada.js";

export class RotaRepository {
	async list() {
		return await Rota.findAll({
			include: [{ model: Coordenada, as: 'coordenadas'}]
		});
	}

	async get(id) {
		return await Rota.findByPk(id, { include: [{ model: Coordenada, as: 'coordenadas'}] })
	}

	async create(rota){
		return await Rota.create(rota);
	}

	async remove(id) {
		return await Rota.destroy({ where: { id } });
	}

	async destroyAll() {
		return await Rota.sync({ force: true });
	}
}
