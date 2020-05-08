const Express = require('express');
const bodyParser =  require('body-parser');
const Cors = require('cors');

const port = 3001;
const server = Express();
server.use(bodyParser.json());
server.use(Cors());

server.listen(port, function(){
    console.log(`API rodando na porta ${port}`)
});


module.exports = server;