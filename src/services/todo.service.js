const data = require("../data/data.json");

class TodoService {
  getByUser(userId) {
    return data.todos.filter((todo) => todo.userId === userId);
  }

  getTodo(id) {
    const todo = data.todos.filter((todo) => todo.id === id);
    const tasks = data.tasks.filter((task) => task.todoId === id);
    return {
      ...todo[0],
      todos: tasks,
    };
  }
}

module.exports = TodoService;
