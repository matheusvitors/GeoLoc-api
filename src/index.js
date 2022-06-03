import express, { json, urlencoded } from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes.js';
import { authenticate, unless } from './middewares/auth.middleware.js';
import sequelize from './database/db.js';

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));
app.use(cors());
app.use(unless(authenticate, '/', '/auth', '/usuarios/novo'));
app.use(routes);

sequelize.sync();

const port = process.env.PORT || 8000;

app.listen(process.env.PORT || 8000, function (){
    console.log("Listen on port %d", port);
});
