const express = require("express");
const middleware = require("./middleware/middleware.js");
const ApiRoute = require("./routes/api.js");
const staticRoute = require("./routes/static.js");

function App(port) {
  const app = express();

  middleware(app);

  staticRoute(app);

  ApiRoute(app);

  app.listen(port, () => {
    console.log(`server is runnig on http://localhost:${port}/ `);
  });
}

module.exports = App;
