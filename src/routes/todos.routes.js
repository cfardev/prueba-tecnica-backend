const express = require("express");
const router = express.Router();

const TodoService = require("../services/todo.service");
const TaskService = require("../services/task.service");

const todoService = new TodoService();
const taskService = new TaskService();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const todo = todoService.getTodo(Number(id));
  res.status(200).json(todo);
});

router.post("/:id/task", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const newTask = taskService.create(body, Number(id));
  res.status(201).json(newTask);
});

module.exports = router;
