const { Router } = require('express');
const Rota = require('./models/Rota');
const Coordenada = require('./models/Coordenada');
const db = require('./database/db');


const routes = Router();

routes.get('/', (req, res) => {
	res.send({ message: 'Ola!' });
})

routes.get('/rotas', async (req, res) => {

	try {
		const rotas = await Rota.findAll();
		res.send({ Rotas: rotas });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
})

routes.get('/rotas/:id', async (req, res) => {

	const { id } = req.params;

	try {
		const rota = await Rota.findByPk(id, {include: Coordenada});
		res.send({ rota: rota });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
})


routes.post('/rotas', async (req, res) => {

	try {
		// const { latitude, longitude, timestamp, rota } = req.body;

		const rota = await Rota.create({ });
		res.status(200).send({ rota: rota });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
}})

routes.delete('/rotas/database', (req, res) => {
	try {
		Rota.sync({ force: true })
		res.status(200).send({ message: 'Database deletada!' });

	} catch (error) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
})


routes.get('/coords', async (req, res) => {

	try {
		const coords = await Coordenada.findAll();
		res.send({ Coordenadas: coords });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
})

routes.post('/coords', async (req, res) => {

	try {
		const { latitude, longitude, timestamp, rota } = req.body;

		const coord = await Coordenada.create({ latitude, longitude, timestamp, rotaId: rota });
		res.status(200).send({ coordenada: coord });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
}})


routes.delete('/coords/database', (req, res) => {
	try {
		Coordenada.sync({ force: true })
		res.status(200).send({ message: 'Database deletada!' });

	} catch (error) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
})

routes.delete('/database', (req, res) => {
	try {
		db.sync({ force: true })
		res.status(200).send({ message: 'Database deletada!' });

	} catch (error) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
})


module.exports = routes;
