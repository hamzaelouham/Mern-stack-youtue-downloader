const {
  downloadController,
  getInfoController,
} = require("../controllers/downloadController.js");

const ApiRoute = (app) => {
  app.get("/info/download", (req, res) => getInfoController(req, res));

  app.get("/downloads", (req, res) => downloadController(req, res));
};

module.exports = ApiRoute;
