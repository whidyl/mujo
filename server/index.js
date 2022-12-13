const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
var bodyParser = require('body-parser')
const routes = require('./routes/routes');

const app = express();
app.use('/api', routes);
app.use(bodyParser.json());

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection; 

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});