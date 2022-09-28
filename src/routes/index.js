const express = require("express");

const todoRouter = require("./todos.routes");
const usersRouter = require("./users.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/", router);
  router.use("/users", usersRouter);
  router.use("/todos", todoRouter);
}

module.exports = routerApi;
