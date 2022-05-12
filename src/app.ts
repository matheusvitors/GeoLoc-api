import express, { Application, Router } from 'express';
import Controller from 'interfaces/Controller';
import packageJson from '../package.json';

export class App {

	public app: Application;
	public port: number;

	constructor(controllers: Controller[], port: number) {
		this.app = express();
		this.port = port;

		this.initializeControllers(controllers);
	}

	private initializeControllers(controllers: Controller[]) {

		this.app.use(Router().get('/', (req, res) => {
			return res.json({
				status: 'Connected',
				name: "Geoloc-api",
				version: packageJson.version
			})
		}));

		controllers.map(controller => {
			this.app.use(controller.router);
		})
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log('Geoloc api is running on port', this.port);
		})
	}

}
