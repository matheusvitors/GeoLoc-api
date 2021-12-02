const { Router } = require('express');
const Coordenada = require('./models/Coordenada');

const routes = Router();

routes.get('/', (req, res) => {
	res.send({ message: 'Ola!' });
})

routes.get('/coords', async (req, res) => {

	try {
		const coords = await Coordenada.findAll();
		res.send({ Coordenadas: coords });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })

	}})

routes.post('/coords', async (req, res) => {

	try {
		const { latitude, longitude, timestamp } = req.body;

		const coord = await Coordenada.create({ latitude, longitude, timestamp });
		res.status(200).send({ coordenada: coord });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
}})

routes.delete('/coords', (req, res) => {
	try {
		Coordenada.sync({ force: true })
		res.status(200).send({ message: 'Database deletada!' });

	} catch (error) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
})


module.exports = routes;
