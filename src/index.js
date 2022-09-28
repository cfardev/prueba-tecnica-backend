const express = require("express");
const routerApi = require("./routes");

const app = express();

app.use(express.json());

routerApi(app);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
