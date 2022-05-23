import { Router } from "express";
import { UsuarioRepository } from "../repositories/usuario.repository.js";

const router = Router();

router.get('/usuarios', async (req, res) => {
	try {
		const usuarios = await new UsuarioRepository().list();
		res.send({ usuarios })
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
})

router.get('/usuarios/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const usuario = await new UsuarioRepository().get(id);
		res.send({ usuario });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message })
	}
});

router.post('/usuarios/novo', async (req, res) => {
	const { matricula } = req.body;

	try {
		const usuario = await new UsuarioRepository().create({ matricula, password: matricula });
		res.send({ usuario });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message })
	}
});

router.delete('/usuarios/:id', async (req, res) => {
	const { id } = req.params;

	try {
		await new UsuarioRepository().remove(id);
		res.status(200).send({ message: 'Usuário deletado!' });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message })
	}
})

export default router;
