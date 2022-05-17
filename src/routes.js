import { Router } from 'express';
import * as RotaController from './controllers/rota.controller.js'
import * as CoordenadaController from './controllers/coordenada.controller.js'

const routes = Router();

routes.get('/', (req, res) => {
	res.send({ message: 'Ola!' });
})

routes.get('/rotas', RotaController.list);
routes.get('/rotas/:id', RotaController.get);
routes.post('/rotas', RotaController.save);
routes.delete('/rotas/database', RotaController.destroyDB);

routes.get('/coords', CoordenadaController.list);
routes.post('/coords', CoordenadaController.save)
routes.delete('/coords/database', CoordenadaController.destroyDB)

routes.delete('/database', (req, res) => {
	try {
		_sync({ force: true })
		res.status(200).send({ message: 'Database deletada!' });

	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message })
	}
})


export default routes;
