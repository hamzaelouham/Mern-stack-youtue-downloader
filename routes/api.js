const {
  downloadController,
  getInfoController,
} = require("../controllers/downloadController.js");

const ApiRoute = (route) => {
  route.get("/info/download", (req, res) => getInfoController(req, res));

  route.get("/downloads", (req, res) => downloadController(req, res));
};

module.exports = ApiRoute;
