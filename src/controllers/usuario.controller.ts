import { Request, Response, Router } from "express"
import { Usuario } from "entities/Usuario";
import { listarUsuario } from "../usecases/usuario";

export class UsuarioController {

	public path = '/usuarios';
	public router = Router();

	constructor() {
		this.initializeRoutes();
	}

	public initializeRoutes() {
		this.router.get(this.path, this.list);
	}


	list = (request: Request, response: Response) => {

		const usuarios = listarUsuario();

		return response.json({
			usuarios
		})
	}

	get = (request: Request, response: Response) => {}

	save = (request: Request, response: Response) => {}

	update = (request: Request, response: Response) => {}

	remove = (request: Request, response: Response) => {}

}
