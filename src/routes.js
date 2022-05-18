import { Router } from 'express';
import AuthController from './controllers/auth.controller.js'
import RotaController from './controllers/rota.controller.js'
import CoordenadaController from './controllers/coordenada.controller.js'
import UsuarioController from './controllers/usuario.controller.js'
import DatabaseController from './controllers/database.controller.js'

const routes = Router();

routes.use(AuthController);
routes.use(RotaController);
routes.use(CoordenadaController);
routes.use(UsuarioController);
routes.use(DatabaseController);

routes.get('/', (req, res) => {
	res.send({ message: 'Ola!' });
})





export default routes;
