// require('@babel/register')({extensions: ['.js', '.ts']});
import { App } from "./app";
import 'dotenv/config';
import { UsuarioController } from "./controllers/usuario.controller";

const controllers = [ new UsuarioController() ]

const app = new App(controllers, Number(process.env.PORT) || 8585);

app.listen();

