const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(routes);

app.listen(8000, function (){
    console.log("Listen on port 8000.");
});
