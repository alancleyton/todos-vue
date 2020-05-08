const Express = require('express');

module.exports = function(server){

    const route = Express.Router();
    server.use('/api', route);

    const todoController = require('../controllers/todoController');
    todoController.register(route, '/todos');

}