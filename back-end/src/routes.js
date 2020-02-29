const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)

module.exports = routes;

// routes.get('/', (req, res) => {
//     // paramentros da query string. Query paramns
//     // parametro 'name'
//     // req.query.name 

//     return res.json({ mensagem: `Olá ${req.query.name}` })
// })