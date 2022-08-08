const express = require("express");
const cors = require("cors");

const middleware = (app) => {
  app.use(express.static("public"));
  app.use(express.json());
  app.use(cors());
};

module.exports = middleware;
