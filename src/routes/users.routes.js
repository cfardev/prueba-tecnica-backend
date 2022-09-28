const express = require("express");
const router = express.Router();
const UserService = require("../services/user.service");
const TodoService = require("../services/todo.service");

const userService = new UserService();
const todoService = new TodoService();

router.get("/", (req, res) => {
  const users = userService.findAll();
  res.status(200).json(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = userService.findOne(Number(id));
  res.status(200).json(user);
});

router.post("/", (req, res) => {
  const body = req.body;
  const newUser = userService.create(body);
  res.status(201).json(newUser);
});

router.get("/:id/todos", (req, res) => {
  const { id } = req.params;
  const todos = todoService.getByUser(Number(id));
  res.status(200).json(todos);
});

module.exports = router;
