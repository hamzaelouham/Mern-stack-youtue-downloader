const homeController = require("../controllers/homeController.js");

function staticRoute(app) {
  app.get("/", ($req, $res) => homeController($res));
}

module.exports = staticRoute;
