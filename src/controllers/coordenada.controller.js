import { CoordenadaRepository } from "../repositories/coordenada.repository.js";

const list = async(req, res) => {
	try {
		const coordenadas = await new CoordenadaRepository().list();
		res.send({ coordenadas });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}

}

const save = async(req, res) => {

	//TODO: Timestamp não está sendo salvo
	try {
		const { latitude, longitude, timestamp, rota } = req.body;
		const coordenada = await new CoordenadaRepository().create({ latitude, longitude, timestamp, rotaId: rota });
		res.status(200).send({ coordenada });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
}

const destroyDB = async(req, res) => {
	try {
		await new CoordenadaRepository().destroyAll();
		res.status(200).send({ message: 'Database deletada!' });

	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message })
	}
}

export { list, save, destroyDB }