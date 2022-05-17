import Rota from "../database/schemas/Rota.js";
import Coordenada from "../database/schemas/Coordenada.js";

export class RotaRepository {
	async list() {
		return await Rota.findAll({ include: [{ model: Coordenada, as: 'coordenadas'}] });
		// return await Rota.findAll();
	}

	async get(id) {
		return await Rota.findByPk(id, { include: [{ model: Coordenada, as: 'coordenadas'}] })
	}

	async create(rota){
		return await Rota.create({});
	}

	async destroyAll() {
		return await Rota.sync({ force: true });
	}
}
