const data = require("../data/data.json");
const { writeFile } = require("fs");
const path = require("path");

class TaskService {
  generateId() {
    let maxId = 0;
    data.tasks.map((user) => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });
    return maxId + 1;
  }

  getTasks() {
    return data.tasks;
  }

  getTasksByTodo(todoId) {
    return data.tasks.filter((task) => task.todoId === todoId);
  }

  create(taskData, todoId) {
    const todo = data.todos.filter((todo) => todo.id === todoId);
    const { id, userId } = todo[0];
    const newTask = {
      id: this.generateId(),
      ...taskData,
      todoId: id,
      userId,
    };
    const currentData = data;
    currentData.tasks.push(newTask);
    const json = JSON.stringify(currentData);
    writeFile(path.join(__dirname, "../data/data.json"), json, "utf-8", (err) =>
      console.log(err)
    );
    return newTask;
  }
}

module.exports = TaskService;
