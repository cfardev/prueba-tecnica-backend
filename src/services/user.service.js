const boom = require("@hapi/boom");
const data = require("../data/data.json");
const { writeFile } = require("fs");
const path = require("path");

class UserService {
  generateId() {
    let maxId = 0;
    data.users.map((user) => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });
    return maxId + 1;
  }

  create(userData) {
    const newUser = {
      id: this.generateId(),
      ...userData,
    };

    const currentData = data;
    currentData.users.push(newUser);

    const json = JSON.stringify(currentData);
    writeFile(path.join(__dirname, "../data/data.json"), json, "utf-8", (err) =>
      console.log(err)
    );
    return newUser;
  }

  findAll() {
    return data.users;
  }

  findOne(id) {
    const user = data.users.find((user) => user.id === id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  }
}

module.exports = UserService;
