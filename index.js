const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const productRouter = require("./modules/product/product.router");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", productRouter);
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
