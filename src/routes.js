const { Router} = require('express');
const devCntroller = require('./app/controllers/devController') 

const routes = Router();

routes.post('/devs', devCntroller.store);
routes.get('/devs', devCntroller.index);

module.exports = routes;