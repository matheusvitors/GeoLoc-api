import express, { json, urlencoded } from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));
app.use(cors());
app.use(routes);

const port = process.env.PORT || 8000;

app.listen(process.env.PORT || 8000, function (){
    console.log("Listen on port %d", port);
});
