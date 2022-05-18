import { Router } from "express";
import { JwtAdapter } from "../adapters/jwt.adapter.js";
import { UsuarioRepository } from "../repositories/usuario.repository.js";


const router = Router();


router.post('/auth', async (req, res) => {

	const { matricula, password } = req.body;

	try {
		const usuario = await new UsuarioRepository().find('matricula', matricula)

		if(!usuario) {
			res.status(401).send({ message: 'Usuário não encontrado.' });
		} else if(password === usuario.password) {
			const token = new JwtAdapter().generate(usuario.id);
			res.send({ autenticado: true, token: token})
		} else {
			res.status(401).send({ message: "Senha inválida.", achou: usuario });
		}

	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}

})

export default router;
