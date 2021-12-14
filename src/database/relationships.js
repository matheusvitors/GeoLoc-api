const Rota = require('./models/Rota');
const Coordenada = require('./models/Coordenada');


Rota.hasMany(Coordenada)
Coordenada.belongsTo(Rota, { constraint: true });
