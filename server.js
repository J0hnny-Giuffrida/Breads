//DEPENDENCIES
const { application } = require("express");
const express = require("express");
const app = express();

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
console.log(PORT);

//MIDDLEWARE(must be above routes)
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});
//breads
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);
// 404 Page
app.get("*", (req, res) => {
  res.status(404).send("404");
});

//LISTEN
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});
