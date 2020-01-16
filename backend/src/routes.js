const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

// Métodos HTTP: GET(reber info), POST(criar info), PUT(editar um recurso), DELETE

//Tipos de parâmetros:
//Query params: request.query (filtros, ordenação, paginação, ...)
//route params: request.params (identificar um recurso na alteração ou remoção)
//body: request.body (dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
