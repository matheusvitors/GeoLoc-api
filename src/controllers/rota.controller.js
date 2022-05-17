
import Rota from '../database/schemas/Rota.js';
import { RotaRepository } from "../repositories/rota.repository.js";

const list = async (req, res) => {
	try {
		const rotas = await new RotaRepository().list();
		res.send({ rotas });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message });
	}
}

const get = async (req, res) => {
	const { id } = req.params;

	try {
		const rota = await new RotaRepository().get(id);
		// const rota = await Rota.findByPk(id, {include: Coordenada});
		res.send({ rota: rota });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
}

const save = async (req, res) => {
	try {
		const rota = await new RotaRepository().create();
		res.status(200).send({ rota: rota });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}

}

const destroyDB = async (req, res) => {
	try {
		await new RotaRepository().destroyAll();
		res.status(200).send({ message: 'Database deletada!' });

	} catch (error) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}

}

export { list, get, save, destroyDB };
