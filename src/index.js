const express = require('express');
const mongose = require('mongoose');

const routes = require('./routes')
const app = express();

mongose.connect('mongodb+srv://Admin:Admin@pontohora-ox6gf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);