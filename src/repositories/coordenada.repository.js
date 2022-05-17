import Coordenada from "../database/schemas/Coordenada.js";

export class CoordenadaRepository {

	async list() {
		return await Coordenada.findAll();
	}

	async get(id) {
		return await Coordenada.findByPk(id)
	}

	async create(coordenada){
		return await Coordenada.create(coordenada);
	}

	async destroyAll() {
		return await Coordenada.sync({ force: true });
	}

}
