
import { Router } from 'express';
import { RotaRepository } from "../repositories/rota.repository.js";

const router = Router();

router.get('/rotas', async (req, res) => {
	try {
		const rotas = await new RotaRepository().list();
		res.send({ rotas });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message });
	}
});

router.get('/rotas/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const rota = await new RotaRepository().get(id);
		// const rota = await Rota.findByPk(id, {include: Coordenada});
		res.send({ rota: rota });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}
});

router.post('/rotas', async (req, res) => {
	try {
		const rota = await new RotaRepository().create();
		res.status(200).send({ rota: rota });

	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}

});

router.delete('/rotas/database', async (req, res) => {
	try {
		await new RotaRepository().destroyAll();
		res.status(200).send({ message: 'Database deletada!' });

	} catch (error) {
		console.log(err);
		res.status(500).send({ error: err.message })
	}

});

export default router;
