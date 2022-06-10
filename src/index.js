import express, { json, urlencoded } from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path'
import routes from './routes.js';
import { authenticate, unless } from './middewares/auth.middleware.js';
import sequelize from './database/db.js';

// import dotenv from 'dotenv'


// if(process.env.NODE_ENV.trim() === 'production') {
// 	dotenv.config({ path: path.resolve(`.env.production`) });
// }

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));
app.use(cors());
app.use(unless(authenticate, '/', '/auth', '/usuarios/novo'));
app.use(routes);

try {
	sequelize.sync();
} catch (error) {
	console.log(error);
}

const port = process.env.PORT || 8005;

app.listen(process.env.PORT || 8000, function (){
    console.log("Listen on port %d", port);
});
