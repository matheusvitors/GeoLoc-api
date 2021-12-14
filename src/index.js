const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes');

const Rota = require('./models/Rota');
const Coordenada = require('./models/Coordenada');

const app = express();

Rota.hasMany(Coordenada, { foreignKey: 'rotaId'})
Coordenada.belongsTo(Rota, { constraint: true, foreignKey: 'rotaId', as: 'rota' });

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(routes);

app.listen(8000, function (){
    console.log("Listen on port 8000.");
});
